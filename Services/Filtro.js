module.exports = {

    getCarro: async(carro, soli)=>{
        try{
            var Alldata = []
            var pos=0

            for(let x = 0; x<carro.length; x++){
                var cont = 0;
                for(let y = 0; y < soli.length; y++){
                    var newvar = carro[x]._id.toString();
                    if(newvar === soli[y].carroId){
                        cont++;
                    } 
                }
                if(cont === 0){
                    Alldata[pos] = carro[x]
                    pos++;
                }
            }

            return { data: Alldata};
        }catch(err){
            return {error: true, message: err.message}
        }
    }
}