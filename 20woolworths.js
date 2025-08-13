


// DATA
document.addEventListener('DOMContentLoaded' , function() {

  window.onbeforeunload = function () {
    window.scrollTo(0,0);
  }
    const jsonData = [{
      "ratingScore": 4,
      "reviewTitle": "Perfect for beverage refridge",
      "reviewDescription": "Nice but a bit noisy when it kicks on."
    },
    {
      "ratingScore": 5,
      "reviewTitle": "Grandma Loves It!",
      "reviewDescription": "I bought this compact refrigerator with freezer for my grandmother who lives in a small shared apartment in New York. The main fridge was always too full, and she had trouble finding space for her own groceries, especially fresh fruits and drinks. This little fridge solved the problem perfectly! It fits nicely in her room without taking up much space, and it looks really sleek with the retro silver design. The 3.5 cu ft capacity is just right for her daily needs, and the small freezer is a big bonus, she can finally keep her ice cream and frozen dumplings! The adjustable thermostat is easy to use (even for someone not very tech-savvy), and it runs quietly, no annoying humming or buzzing. Setup was quick and simple too. If you have a loved one in a small space, dorm, or shared living situation, this mini fridge is 100% worth it. It gave my grandma independence and peace of mind, and that means the world to me."
    },
    {
      "ratingScore": 5,
      "reviewTitle": "Great compact fridge for rooms",
      "reviewDescription": "This compact fridge does not make loud noise when you put in the bedroom, very good for small space. It cool fast, can holds a lot of food and beverages. I put a lot of water in the fridge in this hot summer, help me cool down a lot. The freezer section is separate and work well too, perfect size for a room."
    },
    {
      "ratingScore": 5,
      "reviewTitle": "Nice refrigerator",
      "reviewDescription": "The refrigerator is very light and of good quality. The color is black, very beautiful. It is very suitable to put it on the home bar counter. The cooling effect is good and can hold drinks and beer. It is suitable for family party. It is worth recommending."
    },
    {
      "ratingScore": 4,
      "reviewTitle": "The stainless steel refrigerator is very quality look-wise",
      "reviewDescription": "It's a little smaller on the inside that thought even though I knew the measurements on the outside which I do like. The inside you cannot put even 12 oz cans of pop or water or whatever in the door so that is kind of ironic how the door that has spots for looks like small cans of pop or water they won't fit they'll fit protein bottles small protein bottles but nothing other than that it does have a spot for a few eggs in the top and that's kind of cool it's got three shelves and then a bin in the bottom for maybe water bottles or something it looks it's okay it just I was concerned that you couldn't put pop bottles or water bottles in the door all in all I do like the layout of the inside I'm just was concerned about not being able to put stuff in the door the freezer space is Big very big for a small refrigerator so that part I really like and the cost is very reasonable for what you get and it has a control inside of the refrigerator that controls the temperature and I have it on five and I had it on 6 and I had to turn it down because it will actually freeze stuff in the refrigerator..."
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
          if (el.innerText.includes("perfect")) {
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
          if (el.innerText.includes("nice")) {
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
          if (el.innerText.includes("noisy")) {
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
          if (el.innerText.includes("")) {
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







  