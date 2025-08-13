


// DATA
document.addEventListener('DOMContentLoaded' , function() {

  window.onbeforeunload = function () {
    window.scrollTo(0,0);
  }
    const jsonData = [{
      "ratingScore": 5,
      "reviewTitle": "Excellent Buy!",
      "reviewDescription": "We have been using this for about a month. We are very happy with this purchase. Prior to making the purchase I tried to research this brand of fridge. None came up. But this is biggest fridge that can fit in our fridge space in the kitchen. So we took a chance on it. First of all, it’s very quite. So quite we were not sure if it was working or we received a dud. The temp control seems to be right on. I check it with a laser temp gun few times a week. It’s +/- 0.5 from what I set it at. It’s stylish in a minimalist kind of way, and the temp control & readout on the side panel of fridge door is a nice touch. Build quality feels solid. For the freezer compartment there are divider’s for the sliding upper tray & bottom section. We removed both (need screw driver); this is just FYI for those who find the divider limiting. One thing I do wish is if the fridge door bins are adjustable; they are removable but not adjustable (up/down). For those who need to attach magnetic things on their fridge, yes magnets do attach to both the front & side(s). In our case cooking timers on side of fridge. One thing I should make a note about Amazon delivery; In my case the Amazon only deliver to inside the front door. It does not include removal of old fridge. And we do have to remove the packaging ourselves, move the old fridge away, and move new one in place. My wife & I managed in about 1-1.5 hour, but if this was delivered to my parents (in their 80s) there’s no way they can manage. Amazon had many delivery options but this delivery option was the only one available for our area."
    },
    {
      "ratingScore": 5,
      "reviewTitle": "Great",
      "reviewDescription": "I really like this fridge. It's just perfect for my needs."
    },
    {
      "ratingScore": 2,
      "reviewTitle": "Looks great doesn't work for very long",
      "reviewDescription": "Purchased July of 2023 as of November 2024 we had the refrigerator getting warm yet the freezer was working we did some troubleshooting defrosted the refrigerator for 24 hours and we're able to melt whatever ice block there was unfortunately this happened yet again 3 months later so if you're going to get this fridge be prepared to defrost it plenty of times because they no longer make it you can't get the parts for it and it's turning out to be a big headache.."
    },
    {
      "ratingScore": 3,
      "reviewTitle": "Pretty Dinged Up.",
      "reviewDescription": "The Fridge came fast but the Boxer came in was pretty banged up as you can see in my pictures. After we opened it me, my wife saw a dance on the freezer door and a dent on the site of the fridge. We've just plugged it in, took all the styrofoam out, and we're waiting to see if it cools or not."
    },
    {
      "ratingScore": 1,
      "reviewTitle": "Already leaked after only 4 months",
      "reviewDescription": "The fridge started leaking on the side after only 4 months.its very noisy at night as well. Not happy !!"
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
          if (el.innerText.includes("stylish")) {
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
          if (el.innerText.includes("space")) {
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
          if (el.innerText.includes("front")) {
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
          if (el.innerText.includes("warm")) {
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
          if (el.innerText.includes("bins")) {
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
          if (el.innerText.includes("leaking")) {
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







  