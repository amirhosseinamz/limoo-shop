import res from "../assets/resource.json";

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

export function getTextByTextKey(textKey) {
  const resource = res.resources.rootElement;
  const findKey = resource.find((item) => {
    return (item.text_key === `lpwa.${textKey}`) || (item.text_key === `lbak.${textKey}`) ? item : undefined;
  });
  if (findKey) {
    const findCulture = findKey.content.find(
      (lang) => lang.culture === this.$store.state.language
    );
    return findCulture?.text;
  }
  return undefined;
}



export default resultSplit;
