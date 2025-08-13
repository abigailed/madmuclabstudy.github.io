


// DATA
document.addEventListener('DOMContentLoaded' , function() {

  window.onbeforeunload = function () {
    window.scrollTo(0,0);
  }
    const jsonData = [{
      "ratingScore": 5,
      "reviewTitle": "Great for hydration",
      "reviewDescription": "Great size, no longer need to constantly refill my water and keeps it cold from a pretty long time as well. The only downside I'd say is the screw cap could be easier to unscrew as sometimes it gets a bit stuck. But overall happy with my purchase."
    },
    {
      "ratingScore": 5,
      "reviewTitle": "Fantastic Water Jug",
      "reviewDescription": "High quality. Easy to clean. Comfortable carrying handle. Beautiful colour. I could not be happier."
    },
    {
      "ratingScore": 4,
      "reviewTitle": "Very good thermos",
      "reviewDescription": "Great insulation, put ice and water in it and there is still some ice the day after. Goes in the dishwasher. But it is difficult to tight it completely to prevent water to leak from bellow the lid so I prefer filling it from the small cap."
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
          if (el.innerText.includes("large size")) {
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
          if (el.innerText.includes("insulation")) {
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
          if (el.innerText.includes("screw")) {
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
          if (el.innerText.includes("difficult")) {
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







  