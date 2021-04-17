import data from "~/modules/resourceData.json";

const resource = (page) => {
    const dataResource  = data.resources.rootElement;
    let resultFilterPwa = [];
    let pageFilter      = [];
    let partFilter      = [];

    dataResource.map((content)=>{
      const splitTextKey = content.text_key.split('.')
    
    //   if (splitTextKey.length == 2) {
          if (splitTextKey[0] == 'lpwa') {
              const splitSpecialText = content.text_key.split('.');
              const splitPage        = splitSpecialText[1].split('_');
              
              splitPage.map((contentPage)=>{
                if (contentPage == page) {
                  resultFilterPwa   = [...resultFilterPwa,content];
                }
              })

          }      
    //   }
    
    });



    return resultFilterPwa;
}




export default resource;


