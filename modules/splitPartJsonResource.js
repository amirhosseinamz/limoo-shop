
const resultSplit = (data,text,findLanguage) => {
    let resultFilterPwa = {};
    
    data.find((content)=>{
              const splitTextKey     = content.text_key.split('.')
              if (splitTextKey[1] == text) {
                resultFilterPwa   = content;
              }
    });

    resultFilterPwa.content.find((content)=>{
        if (content.culture == findLanguage) {
            resultFilterPwa.languageData = content;
        }
    })

    return resultFilterPwa;
}




export default resultSplit;


