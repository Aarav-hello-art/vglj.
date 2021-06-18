Webcam.set({
    height : 300,
    width : 300,
    img_format : "png",
    png_quality : 90
});

Webcam.attach("camera");

function capture(){
    Webcam.snap(
        function (image){
            document.getElementById("snap").innerHTML = `<img id="cp_img" src= ${image}>`
        }
    )
}

console.log("ml5version :" + ml5.version)

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ZTZq7yyyh/model.json",model_loaded)

function model_loaded(){
    console.log("Your model is working")
}

function speak() {
    api = window.speechSynthesis
    speak_data1 = "The first prediction is " + prediction1
    speak_data2 = "The second prediction is" + prediction2
    utterthis = new SpeechSynthesisUtterance(speak_data1 + speak_data2)
    api.speak(utterthis)
}

function identify() {
    var img = document.getElementById("cp_img")
    classifier.classify(img, getresults)
 }





 function getresults(error,results) {
    if (error) {
        console.log(error)
    } else {
        console.log(results)
        prediction1 = results[0].label
        prediction2 = results[1].label
        document.getElementById("gesture1").innerHTML = prediction1
        document.getElementById("gesture2").innerHTML = prediction2
        speak();
        if (prediction1 == "Victory") {
            document.getElementById("gesture1").innerHTML = "&#9996"
        }

        if (prediction1 == "Thumbs up") {
            document.getElementById("gesture1").innerHTML = "&#128077"
        }

        if (prediction1 == "Thumbs down") {
            document.getElementById("gesture1").innerHTML = "&#128078"
        } 

        if (prediction1 == "Punch") {
            document.getElementById("gesture1").innerHTML = "&#9994"
        } 

        if (prediction1 == "Ok") {
           document.getElementById("gesture1").innerHTML = "&#128076"
        }

        if (prediction1 == "A-Hole") {
            document.getElementById("gesture1").innerHTML = "A-Hole"
        }






            if (prediction2 == "Victory") {
               document.getElementById("gesture2").innerHTML = "&#9996"
           }
   
           if (prediction2 == "Thumbs up") {
               document.getElementById("gesture2").innerHTML = "&#128077"
           }
   
           if (prediction2 == "Thumbs down") {
               document.getElementById("gesture2").innerHTML = "&#128078"
           } 
   
           if (prediction2 == "Punch") {
               document.getElementById("gesture2").innerHTML = "&#9994"
           } 
  
           if (prediction2 == "Ok") {
              document.getElementById("gesture2").innerHTML = "&#128076"
           
   
           if (prediction2 == "A-Hole") {
               document.getElementById("gesture2").innerHTML = "A-Hole"
           }
        } 
        }
    } 