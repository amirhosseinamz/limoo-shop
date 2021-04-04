import data from "~/modules/resourceData.json";

const resource = () => {
    const dataResource  = data.resources.rootElement;
    let resultFilterPwa = [];

    dataResource.map((content)=>{
      const splitTextKey = content.text_key.split('.')
    
    //   if (splitTextKey.length == 2) {
          if (splitTextKey[0] == 'lpwa') {
              resultFilterPwa = [...resultFilterPwa,content];
          }      
    //   }
    
    })

    return resultFilterPwa;
}



export default resource();


