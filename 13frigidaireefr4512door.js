


// DATA
document.addEventListener('DOMContentLoaded' , function() {

  window.onbeforeunload = function () {
    window.scrollTo(0,0);
  }
    const jsonData = [{
      "ratingScore": 5,
      "reviewTitle": "Fridge perfect size",
      "reviewDescription": "Love all of it. Size was perfect. Lots of room ."
    },
    {
      "ratingScore": 5,
      "reviewTitle": "lots of room",
      "reviewDescription": "Quite large for a mini fridge. I like the room it has inside."
    },
    {
      "ratingScore": 1,
      "reviewTitle": "Too noisy to be a mini-fridge",
      "reviewDescription": "If you are considering using it as a mini-fridge in a bedroom or dorm room, don't go for it because it makes a lot of noise and you won't be able to sleep in the room where it is kept. Being a large item, it is also difficult to return, so it is better not to order. Had I known the noise issue earlier, I wouldn't have ordered."
    },
    {
      "ratingScore": 4,
      "reviewTitle": "Good but door is different",
      "reviewDescription": "Love it, works great BUT the door storage is completely different from what is pictured (for the larger of the two units). Look at the photos in the reviews to see the actual configuration. If you don't need a can dispenser (which I don't) it takes away about a quarter of the door storage."
    },
    {
      "ratingScore": 3,
      "reviewTitle": "It contiinues to make noise running",
      "reviewDescription": "Love the size, price was right, but it was for upstairs in bedroom, so I did not have to come downstairs to get a drink from kitchen refrigerator. Problem is, in the bedroom, it is so loud and when it turns off, it has another loud turn off noise. So thinking this would be like my camper frigerator, it is not. Why its so loud is beyond me. Keeps cold, but the running noises are too loud to keep in bedroom"
    },
    {
      "ratingScore": 5,
      "reviewTitle": "Great mini refrigerator",
      "reviewDescription": "very pleased with this mini refrigerator. It has enough space for a lot of things. It does not take up a lot of space and it looks very nice with steel doors. The only thing I don't like is that shelves on doors are not adjustable so there are space that is not usable because it is not big enough. It would be nice to be able to adjust shelves on door."
    },
    {
      "ratingScore": 4,
      "reviewTitle": "Nicely sized fridge, very effective",
      "reviewDescription": "Nice refrigerator, particularly for the size (it even has light when you open the door!). Filled a significant need for us, and affordably. Can dispenser is awesome and freezer is handy. Only wish the shelves were a little more spaced to hold a gallon of milk without removing one."
    },
    {
      "ratingScore": 3,
      "reviewTitle": "Very loud",
      "reviewDescription": "It is good looking unit. The first 5 or 6 hours it was plugged in the unit ran fairly quietly. Within less than 3 days, it became very very loud when cycling on. When it reaches correct temperature the noise lowers considerably. The problem is it frequently goes thru that cycling to maintain the correct temperature. So every couple of hours it sounds like a car is running. It can be heard in the room below it even with a TV on. I wouldn't buy it again. Very disappointing."
    },
    {
      "ratingScore": 5,
      "reviewTitle": "High quality frig.",
      "reviewDescription": "Super, really impressed by the quality. Works very well. Big note, the packaging was extremely well done. No shipping damages, not a scratch. Two doors, are really good. I'm impressed on every level. ( That don't happen often.)"
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
          if (el.innerText.includes("design")) {
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
          if (el.innerText.includes("roomy")) {
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
          if (el.innerText.includes("")) {
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
          if (el.innerText.includes("noise")) {
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
          if (el.innerText.includes("")) {
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







  