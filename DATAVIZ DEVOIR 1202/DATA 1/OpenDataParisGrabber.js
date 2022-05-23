let opendataparisURL    = "https://opendata.paris.fr/api/records/";
let version             = "1.0/";
let question            = "search/?dataset=";
let datasetID           = "arbresremarquablesparis";
let rows                = "&q=&rows="+10;
let sort                = "&sort="+"hauteurenm"
let facetrequest        = "&facet=";
let facets              = facetrequest+"genre"+facetrequest+"espece";

let request             = opendataparisURL+version+question+datasetID+rows+sort+facets;

//shows a top ten book/auteur
//Top ten auteurs (with  multiple book) how many title are book per authors
//top ten of document type
let topTenHauteur = [];
let topTenHauteurLabels = [];
let topTenArbreType = [];
let topTenArbreTypeLabels = [];
// TopTenLargeur

LoadData(request)
    .then(response => {
        console.log("All data have been loaded");
        console.log(response);

        //top ten des arbres remarquables les plus hauts de Paris
        let records = response.records;
        for(let i=0; i<10; i++){
            let field   = records[i].fields;
            let label   = field.genre;
            let count   = field.hauteurenm;

            topTenHauteur.push(count);
            topTenHauteurLabels.push(label);
        }
        console.log(topTenHauteur);
        console.log(topTenHauteurLabels);
        
        //top ten Type d'arbres remarquables de Paris
        let facetArbreType = response.facet_groups[1].facets;
        for(let i=0; i<10; i++){
            let label = facetArbreType[i].name;
            let count = facetArbreType[i].count;

            topTenArbreTypeLabels.push(label);
            topTenArbreType.push(count);
        }
        console.log(topTenArbreTypeLabels);
        console.log(topTenArbreType);

        

        //draw
        BarGraph(   "topTenHauteur", 
                    "Top dix des arbres remarquables les plus hauts de Paris",
                    topTenHauteurLabels, topTenHauteur);


        BarGraph2(   "topTenArbreType", 
                    "Top dix des type d'arbres remarquables de Paris",
                    topTenArbreTypeLabels, topTenArbreType);

    })
    .catch(error => {
        console.error(error);
    });


async function LoadData(dataURL){
    const response  = await fetch(dataURL);
    const rawData   = await response.json();
    return rawData;
}