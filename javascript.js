var counter = 0;
var bool = [];

function generator(title, pfad, nummer ) {
    var list = document.getElementById("div" + nummer);
    main = document.getElementById("main")


       for(let i = 0; i < title.length; i++) {
           var newItem1 = document.createElement("a");
           var textnode = document.createTextNode(title[i]);

           newItem1.setAttribute('href', "")
           newItem1.addEventListener('click', event => {
               event.preventDefault();
               const url = pfad[i]
               main.innerHTML = '<iframe style="width:100%;height:100%;" frameborder="0" src="' + url + '" />';


            })
           
           //newItem1.setAttribute('id', 'test1')

           newItem1.appendChild(textnode);
           list.appendChild(newItem1)
           list.appendChild(document.createElement("br"))

        }
}

function test(nummer) {
    switch(nummer) {
        case 1:
             if(bool[nummer] === 99) {
                 var list = document.getElementById("div" + nummer);
                 list.innerHTML = "";
                 bool[nummer] = 0;

                 break;
             }

             var title = ["CSS Positionierung Teil 1", "CSS Positionierung Teil 2", "Wireframe with HTML and CSS"]
             var pfad = ["Uebung2/zweiPunktEins.html", "Uebung2/zweiPunktZwei.html", "Uebung2/zweiPunktDrei.html"]
             generator(title, pfad, nummer)

             
            counter = 0;
            bool[nummer] = 99;
            break;

            //  var list = document.getElementById("div" + nummer);
            //  main = document.getElementById("main")
            //  var domasIdee = ["CSS Positionierung Teil 1", "CSS Positionierung Teil 2", "Wireframe with HTML and CSS"]
            //  var domasIdee2 = ["zweiPunktEins.html", "zweiPunktZwei.html", "zweiPunktDrei.html"]

            //     for(let i = 0; i < domasIdee.length; i++) {
            //         var newItem1 = document.createElement("a");
            //         var textnode = document.createTextNode(domasIdee[i]);
        
            //         newItem1.setAttribute('href', "")
            //         newItem1.addEventListener('click', event => {
            //             event.preventDefault();
            //             const url = 'Uebung2/' + domasIdee2[i]
            //             main.innerHTML = '<iframe style="width:100%;height:100%;" frameborder="0" src="' + url + '" />';

        
            //          })
                    
            //         newItem1.setAttribute('id', 'test1')

            //         newItem1.appendChild(textnode);
            //         list.appendChild(newItem1)
            //         list.appendChild(document.createElement("br"))

            //      }
             

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

        

        case 2:
            if(bool[nummer] === 99) {
                var list = document.getElementById("div" + nummer);
                list.innerHTML = "";
                bool[nummer] = 0;

                break;
            }

            var title = ["Responsiv mit Flexbox Desktop-First", "Responsiv mit Grid Mobile-First", "Responsiv mit Grid"]
            var pfad = ["Uebung3/dreiPunktEins.html", "Uebung3/dreiPunktZwei.html", "Uebung3/dreitPunktDrei.html"]
            generator(title, pfad, nummer)

            
           counter = 0;
           bool[nummer] = 99;
           break;

        case 3:
        if(bool[nummer] === 99) {
            var list = document.getElementById("div" + nummer);
            list.innerHTML = "";
            bool[nummer] = 0;

            break;
        }

        var title = ["Responsiv mit Flexbox Desktop-First", "Responsiv mit Grid Mobile-First", "Responsiv mit Grid"]
        var pfad = ["Uebung3/dreiPunktEins.html", "Uebung3/dreiPunktZwei.html", "Uebung3/dreitPunktDrei.html"]
        generator(title, pfad, nummer)

        
        counter = 0;
        bool[nummer] = 99;
        break;

    case 4:
        if(bool[nummer] === 99) {
            var list = document.getElementById("div" + nummer);
            list.innerHTML = "";
            bool[nummer] = 0;

            break;
        }

        var title = ["Funktionen", "Objekte", "Fibonacci", "Topsort"]
        var pfad = ["Uebung4/vierPunktEins.html", "Uebung4/vierPunktZwei.html", "Uebung4/vierPunktDrei.html", "Uebung4/vierPunktVier.html"]
        generator(title, pfad, nummer)

        
        counter = 0;
        bool[nummer] = 99;
        break;

    case 5:
        if(bool[nummer] === 99) {
            var list = document.getElementById("div" + nummer);
            list.innerHTML = "";
            bool[nummer] = 0;

            break;
        }

        var title = ["Klasse für Vorrangrelationen", "Topologische Iterierbarkeit", "Topologischer Generator", "Proxy", "DeepCopy"]
        var pfad = ["Uebung5/dreiPunktEins.html", "Uebung5/dreiPunktZwei.html", "Uebung5/dreitPunktDrei.html"]
        generator(title, pfad, nummer)

        
        counter = 0;
        bool[nummer] = 99;
        break;


    case 6:
        if(bool[nummer] === 99) {
            var list = document.getElementById("div" + nummer);
            list.innerHTML = "";
            bool[nummer] = 0;

            break;
        }

        var title = ["Responsiv mit Flexbox Desktop-First", "Responsiv mit Grid Mobile-First", "Responsiv mit Grid"]
        var pfad = ["Uebung3/dreiPunktEins.html", "Uebung3/dreiPunktZwei.html", "Uebung3/dreitPunktDrei.html"]
        generator(title, pfad, nummer)

        
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