var counter = 0;
var bool = [];

var changedBackground = true;

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

function show(nummer) {
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
             generator(title, pfad, nummer);
             backIn(nummer);
             
            counter = 0;
            bool[nummer] = 99;
            break;
        

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
            backIn(nummer)
            
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
        backIn(nummer)
        
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
        backIn(nummer)
        
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
        backIn(nummer)
        
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
        backIn(nummer)
        
        counter = 0;
        bool[nummer] = 99;
        break;



        default:
            console.log("no such thing " + nummer)
            break;
    }
}


function backIn(nummer) {

    for(let i = 0; i < 7; i++) {
        if(i === nummer) {
            continue;
        }
        var list = document.getElementById("div" + i);
        list.innerHTML = "";
        bool[nummer] = 0;
    }
}




function changeStyle() {


    if(changedBackground) {
        document.head.innerHTML  = document.head.innerHTML.replace("light.css", "dark.css");
        changedBackground = !changedBackground;

    } else {
        document.head.innerHTML = document.head.innerHTML.replace("dark.css", "light.css");
        changedBackground = !changedBackground;

    }
    
}

