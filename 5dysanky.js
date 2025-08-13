


// DATA
document.addEventListener('DOMContentLoaded' , function() {

  window.onbeforeunload = function () {
    window.scrollTo(0,0);
  }
    const jsonData = [{
      "ratingScore": 5,
      "reviewTitle": "great product.",
      "reviewDescription": "awesome product, so many extras! not including straws, sleeve, and 2 tops it has a compass, whistle, all kinds of carabiners that I haven’t figured out yet, probably for keys, and pocket for phone or small wallet? very pleased ,well made and worth every penny. (not like coolflask company) water stays very cold for long periods."
    },
    {
      "ratingScore": 4,
      "reviewTitle": "Exactly as it appears.",
      "reviewDescription": "The bottle is exactly as described and I love the purple/black, however I don't understand why it's more expensive than plain black. I have only used it once and it's great. It comes with accessories like a different lid, 2 straws and 2 cleaning brushes. It also has a small compass on the handle and parachute cord which we be good if you got lost in the wilderness or needed some form of rope. It's appears to be good value and very sturdy. If you put ice in it, it will last around 8 hours, so very well insulated. 4 stars because I've only had it one day."
    },
    {
      "ratingScore": 5,
      "reviewTitle": "Keeps Water Cold, Built Like a Tank – Great for the Gym or Outdoors",
      "reviewDescription": "I’ve only had the DYSANKY 64 oz insulated water bottle for a day, but it’s already proven to be exactly what I needed. This thing is solid. From the first time you pick it up, you can feel the quality—thick stainless steel, secure lid, and thoughtful design all around. The insulation works really well. I filled it with ice water in the morning, went through a full workout, ran errands, and still had ice hours later. That’s exactly what I wanted in a bottle of this size—cold water that actually stays cold. It’s ideal for long gym sessions, hikes, or just keeping hydrated throughout a busy day. The included straw lid is a nice bonus. It’s comfortable to use, doesn’t leak, and makes sipping easy without unscrewing anything. The carrier bag and handle strap are more useful than I expected—especially since this bottle holds a half gallon and can get heavy when full. The strap makes it super easy to carry around or sling over a shoulder while walking or hiking. The overall construction feels tough and durable, but still looks clean. I like that it’s BPA-free, and everything seems designed with actual user convenience in mind. The wide mouth also makes it easy to clean and load with ice. ⸻ Pros: • Keeps water cold for hours (ice retention is excellent) • Straw lid is easy to use and leak-free • Includes carrier bag and handle strap for portability • Sturdy, thick stainless steel construction • Holds a full 64 oz—perfect for workouts or all-day hydration • Easy to clean Cons: • It’s big, and heavy when full (not a con for me, but worth noting) • Might not fit easily in standard car cup holders due to its size ⸻ Final Thoughts: If you’re looking for a high-capacity water bottle that actually keeps your drinks cold and can handle being tossed around in a gym bag or taken on a trail, this is a great choice. After one day of use, I can already tell it’s going to become part of my daily routine. Comfortable to carry, easy to drink from, and built to last—definitely happy with this purchase."
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
          if (el.innerText.includes("cold")) {
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
          if (el.innerText.includes("easy cleaning")) {
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
          if (el.innerText.includes("durable")) {
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
          if (el.innerText.includes("big")) {
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
          if (el.innerText.includes("leak")) {
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
          if (el.innerText.includes("stuck")) {
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







  