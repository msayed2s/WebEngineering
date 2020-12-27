var counter = 0;
var bool = [];
function test(nummer) {
    switch(nummer) {
        case 1:
             if(bool[nummer] === 99) {
                 console.log("Nö");
                 return;
             }
             var list = document.getElementById("div" + nummer);
             main = document.getElementById("main")
             var domasIdee = ["CSS Positionierung Teil 1", "CSS Positionierung Teil 2", "Wireframe with HTML and CSS"]
             var domasIdee2 = ["zweiPunktEins.html", "zweiPunktZwei.html", "zweiPunktDrei.html"]

                for(let i = 0; i < domasIdee.length; i++) {
                    var newItem1 = document.createElement("a");
                    var textnode = document.createTextNode(domasIdee[i]);
        
                    newItem1.setAttribute('href', "")
                    newItem1.addEventListener('click', event => {
                        event.preventDefault();
                        const url = 'Uebung2/' + domasIdee2[i]
                        main.innerHTML = '<iframe style="width:100%;height:100%;" frameborder="0" src="' + url + '" />';
                        console.log( 'Keine Weiterleitung, sondern Ausgabe auf console' );
        
        
                        //var dom = myFunction("Uebung2/zweiPunktZwei.html")
        
                     })
                    // newItem1.setAttribute('href', "Uebung2/zweiPunktEins.html")
                    newItem1.setAttribute('id', 'test1')
                    // newItem1.setAttribute('target', '_blank')
                    newItem1.appendChild(textnode);
                    list.appendChild(newItem1)
                    list.appendChild(document.createElement("br"))

                 }
             

            // console.log(bool[nummer])
            // var newItem1 = document.createElement("a");
            // var textnode = document.createTextNode("CSS Positionierung Teil 1");

            // newItem1.setAttribute('href', "")
            // newItem1.addEventListener('click', event => {
            //     event.preventDefault();
            //     const url = 'Uebung2/zweiPunktEins.html'
            //     main.innerHTML = '<iframe style="width:100%;height:100%;" frameborder="0" src="' + url + '" />';
            //     console.log( 'Keine Weiterleitung, sondern Ausgabe auf console' );


            //     var dom = myFunction("Uebung2/zweiPunktZwei.html")

            //  })
            // // newItem1.setAttribute('href', "Uebung2/zweiPunktEins.html")
            // newItem1.setAttribute('id', 'test1')
            // // newItem1.setAttribute('target', '_blank')
            // newItem1.appendChild(textnode);

            // var newItem2 = document.createElement("a");
            // var textnode = document.createTextNode("CSS Positionierung Teil 2");
            // newItem2.setAttribute('href', "Uebung2/zweiPunktZwei.html")
            // newItem2.appendChild(textnode);

            // var newItem3 = document.createElement("a");
            // var textnode = document.createTextNode("Wireframe with HTML and CSS");
            // newItem3.setAttribute('href', "Uebung2/zweiPunktDrei.html")
            // newItem3.appendChild(textnode);

            // var breaker = document.createElement("br");

            // var list = document.getElementById("div" + nummer);
            // list.appendChild(newItem1);
            // list.appendChild(document.createElement("br"))
            // list.appendChild(newItem2);
            // list.appendChild(document.createElement("br"))
            // list.appendChild(newItem3);

            counter = 0;
            bool[nummer] = 99;
            break;
        

        case 2:
            if(bool[nummer] === 99) {
                console.log("Nö");
                return;
            }
           console.log(bool[nummer])
           var newItem1 = document.createElement("a");
           var textnode = document.createTextNode("CSS Positionierung Teil 1   ");
           newItem1.setAttribute('href', "Uebung2/zweiPunktEins.html")
           newItem1.appendChild(textnode);

           var newItem2 = document.createElement("a");
           var textnode = document.createTextNode("CSS Positionierung Teil 2     ");
           newItem2.setAttribute('href', "Uebung2/zweiPunktZwei.html")
           newItem2.appendChild(textnode);

           var newItem3 = document.createElement("a");
           var textnode = document.createTextNode("Wireframe with HTML and CSS");
           newItem3.setAttribute('href', "Uebung2/zweiPunktDrei.html")
           newItem3.appendChild(textnode);

           var breaker = document.createElement("br");

           var list = document.getElementById("div" + nummer);
           list.appendChild(newItem1);
           list.appendChild(document.createElement("br"))
           list.appendChild(newItem2);
           list.appendChild(document.createElement("br"))
           list.appendChild(newItem3);

           //console.log("Oranges are $0.59 a pound.");
           counter = 0;
           bool[nummer] = 99;
           break;
        default:
            break;
    }
}


function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}



function myFunction(url) {
	Event.preventDefault()
    var n = window.open(url);
    return n;
  
}


var tmpp = document.getElementById('test1').addEventListener("onclick", event => {
    event.preventDefault();
    console.log("Doma ist Baba");
})


// document.addEventListener(onclick, event => {
//     var tmpp = document.getElementById('main')
//     console.log("Doma ist King")
// })