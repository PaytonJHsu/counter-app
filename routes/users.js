import express from 'express';
import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv';

dotenv.config()
const router = express.Router();
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_PUBLISHABLE_KEY)

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/submit-score', async function(req,res){
  const username = req.body.username;
  const score = req.body.count;
  console.log('Received username:', username);
  console.log('Recieved score:', score);

  const { error } = await supabase  
    .from('player_scores')  
    .insert({ 
      name: username, 
      high_score: score
    })
  if (error) {
    console.error("Supabase insert error:", error);
    return res.status(500).send("Failed to save score");
  }
  res.redirect('/home')
})
export default router;
