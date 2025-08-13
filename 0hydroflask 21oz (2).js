


// DATA
document.addEventListener('DOMContentLoaded' , function() {

  window.onbeforeunload = function () {
    window.scrollTo(0,0);
  }
    const jsonData = [{
      "ratingScore": 5,
      "reviewTitle": "Miss the Old You, But You Are Still Good For Me",
      "reviewDescription": "Very durable, pretty colour on it as well. Size is universal and fits most backpack slots. I do miss the old kick starter cast cap that you can attach a carabiner to but it seems that was discontinued many years ago to my surprise. Great value bottle and helps keep your drinks cool."
    },
    {
      "ratingScore": 5,
      "reviewTitle": "great water bottle but...",
      "reviewDescription": "I got this size water bottle because it's not too big and not too small. I just used this in a Chevy suburban and the bottle fit just right in the cup holder. I got the lid without the straw and it has a nice carry handle. I will buy the lid with the straw for future use because it is not easy for me to drink from this bottle when the car is in motion. the car stopped and I wasn't paying attention and the water spilled on me. if I had a lid with a straw that would've never happened. the bottle is good as is for hiking because I can just stop and drink from my bottle. if you intend to use this in a vehicle I would get the lid with the straw. the bottle kept my drinks cold. didn't test it for hot drinks yet as I am writing this review in the summer. it was a little pricey for my usual budget but I find it is worth it because so far the bottle is very durable and it seems it will last a while. the bottle is also easy to clean. so far so good!"
    },
    {
      "ratingScore": 5,
      "reviewTitle": "Love this bottle",
      "reviewDescription": "I purchased this item because I now understand how important it is to switch out your bottles daily!!! This bottle is perfect for cold drinks. I even put ice in it and the ice will melt slowly. This is my second time ordering this item. I will order another very soon. I must say that even after the bottle is full, it is still lightweight!!! Fits in my cupholder and hand with ease. Also, I filled the bottle then turned it upside down, and nothing leaked out!!! Love that there is truth in advertising!!!"
    },
    {
      "ratingScore": 5,
      "reviewTitle": "Best thermal bottle",
      "reviewDescription": "This is the best thermal bottle brand I like. It doesn't have a straw or other bells and whistles, just simple bottle that's easy to keep clean. It keeps the temperature really well and doesn't leak. It also looks really cool. What else can you ask for."
    },
    {
      "ratingScore": 5,
      "reviewTitle": "I am both pleased and impressed!",
      "reviewDescription": "It about wore me out looking at insulated bottles with so many out there to choose from! I am a heavy coffee drinker and wanted to be able to carry a nice, fresh refill for my travel mug while out and about. I will begin by saying that the first photo in my review, does NOT accurately represent the actual color that I purchased, Agave. The fluorescent lights in my shop are not color friendly. The actual color is a soft greyish green, like sage leaves and is very pleasant. Edit to ad: We had a spot of sunshine on the back porch today, so I took it out in the sunshine for a better pic. Much better color representation in the last picture. Initially, I was looking in the $20 range and found a lot of products that were \"close\" to what I wanted, but no cigar. After looking at the Hydro Flask page and seeing that accessories and replacement parts are available, I decided it would be worth a try. At the steeper price, over twice the price in many cases, it was worth it to get exactly what I wanted. My search criteria was as follows: * A Wide Mouth: For ease of filling, cleaning, easy pouring and nice big gulps. No straw or spout to clean or fiddle with. . *A Plastic Stopper: Because stainless on stainless threads are prone to galling. * No Big, Fragile or Obtrusive Handle: Didn't want something that would break off or get in the way or a lanyard to collect crud. This handle is small, folds back unobtrusively and is flexible so shouldn't break if twisted or bumped. *Easy to fill with hot liquids or cold beverages with ice. *A Centered Spout: So I didn't have to look and align it every time I took a drink or poured from it. *Cup Holder friendly in my old Jeep *Nice color *Sturdy construction This has absolutely ticked all of the boxes. It's slim enough to hold comfortably, very attractive without being showy and well constructed. I think we're going to be coffee drinking buddies for a very long time."
    },
    {
      "ratingScore": 4,
      "reviewTitle": "Great for everyday",
      "reviewDescription": "Great value for the money. I purchased this a recent vacation and it fit in my bag perfectly and it kept my water cold and did spill. It is durable, however, it does dent pretty easily."
    },
    {
      "ratingScore": 5,
      "reviewTitle": "Works Great",
      "reviewDescription": "Love the color and durability. My husband uses this for work daily and it keeps his coffee hot. Also love that it is lead free."
    }]





  // CONTROLS FOR HOW THE DATA LOOKS AND SUCH

  let output = "";
  
  let name = ["Eliza Duke", "Jaden Harvey" , "Arron Kent","Ivy Kirk" , "Huda Nolan" , "Mia Lee" , "Mohammad Roberson" ,"Alexandria Maxwell" , "Issac Pearce", "Yasmin Wang"]
  let i = 0;
  jsonData.forEach(item => {
    let ratingValue = item.ratingScore*20;
    output += `
        <div class="review">
         
         <h3> <p> ${name[i]}</p> <br>
         <div class="ratings">
            <div class="ratings-val" style="width: ${(ratingValue)}% ;"></div><!-- End .ratings-val -->
          </div><!-- End .ratings -->   ${item.reviewTitle}</h3>
          <p id="reviewdes">${item.reviewDescription}</p>
        </div>
      `;
      i++;
    });
    
    document.getElementById("outputerr").innerHTML = output;

   
    

    const clickText1 = document.getElementById("pro1");
    const clickText2 = document.getElementById("pro2");
    const clickText3 = document.getElementById("pro3");
    const clickText4 = document.getElementById("con1");
    const clickText5 = document.getElementById("con2");
    const clickText6 = document.getElementById("con3");
   
      
      function highlight_review_one() {
        const allReviews = document.querySelectorAll('.review');

        allReviews.forEach(el => {
          if (el.innerText.includes("durable")) {
            el.style.backgroundColor = "yellow";
            el.scrollIntoView({ behavior: "smooth", block: "center" });
          }
          else{
            el.style.backgroundColor = "white";
          }
        })
      }

      function highlight_review_two() {
        const allReviews = document.querySelectorAll('.review');

        allReviews.forEach(el => {
          if (el.innerText.includes("fits")) {
            el.style.backgroundColor = "yellow";
            el.scrollIntoView({ behavior: "smooth", block: "center" });
          }
          else{
            el.style.backgroundColor = "white";
          }
        })
      }

      function highlight_review_three() {
        const allReviews = document.querySelectorAll('.review');

        allReviews.forEach(el => {
          if (el.innerText.includes("easy to clean")) {
            el.style.backgroundColor = "yellow";
            el.scrollIntoView({ behavior: "smooth", block: "center" });
          }
          else{
            el.style.backgroundColor = "white";
          }
        })
      }

      function highlight_review_four() {
        const allReviews = document.querySelectorAll('.review');

        allReviews.forEach(el => {
          if (el.innerText.includes("dent")) {
            el.style.backgroundColor = "yellow";
            el.scrollIntoView({ behavior: "smooth", block: "center" });
          }
          else{
            el.style.backgroundColor = "white";
          }
        })
      }

      function highlight_review_five() {
        const allReviews = document.querySelectorAll('.review');

        allReviews.forEach(el => {
          if (el.innerText.includes("price")) {
            el.style.backgroundColor = "yellow";
            el.scrollIntoView({ behavior: "smooth", block: "center" });
          }
          else{
            el.style.backgroundColor = "white";
          }
        })
      }

    

      function highlight_review_six() {
        const allReviews = document.querySelectorAll('.review');

        allReviews.forEach(el => {
          if (el.innerText.includes("spill")) {
            el.style.backgroundColor = "yellow";
            el.scrollIntoView({ behavior: "smooth", block: "center" });
          }
          else{
            el.style.backgroundColor = "white";
          }
        })
      }
     
      clickText1.addEventListener('click', highlight_review_one);
      clickText2.addEventListener('click', highlight_review_two);
      clickText3.addEventListener('click', highlight_review_three);
      clickText4.addEventListener('click', highlight_review_four);
      clickText5.addEventListener('click', highlight_review_five);
      clickText6.addEventListener('click', highlight_review_six);


//end of what was working!!



                                                                                                                                                                                                                                                      
//TESTING OPEN AI

// async function analyzeReviews() {
//   const reviewText = reviews.map(r => r.reviewDescription).join("\n");

//   const response = await fetch("https://api.openai.com/v1/chat/completions", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization": "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"
//     },
//     body: JSON.stringify({
//       model: "gpt-4.1",
//       messages: [
//         {
//           role: "system",
//           content: "You are a helpful assistant that extracts pros and cons from Amazon product reviews."
//         },
//         {
//           role: "user",
//           content: `Here are some reviews:\n${reviewText}`
//         }
//       ],
//       functions: [
//         {
//           name: "generate_pros_and_cons",
//           description: "Extracts pros and cons from a list of product reviews.",
//           parameters: {
//             type: "object",
//             properties: {
//               pros: {
//                 type: "array",
//                 items: { type: "string" }
//               },
//               cons: {
//                 type: "array",
//                 items: { type: "string" }
//               }
//             },
//             required: ["pros", "cons"]
//           }
//         }
//       ],
//       function_call: { name: "generate_pros_and_cons" }
//     })
//   });

//   const data = await response.json();

//   const result = JSON.parse(data.choices[0].message.function_call.arguments);

//   document.getElementById("results").innerHTML = `
//         <h2>Pros</h2>
//         <ul>${result.pros.map(p => `<li>${p}</li>`).join("")}</ul>
//         <h2>Cons</h2>
//         <ul>${result.cons.map(c => `<li>${c}</li>`).join("")}</ul>
//       `;

// }

// document.getElementById("analyze").addEventListener("click", analyzeReviews);








}) 







  