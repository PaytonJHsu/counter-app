export function home(req,res) {
    try{
        res.render('pages/home',{
        layout: 'main'
        })
    }catch(e){
        console.log(e);
    }
    
}

export function counter(req,res){
    res.render('pages/counter',{
    layout: 'main'
    })
}

