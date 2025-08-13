


// DATA
document.addEventListener('DOMContentLoaded' , function() {

  window.onbeforeunload = function () {
    window.scrollTo(0,0);
  }
    const jsonData = [{
      "ratingScore": 1,
      "reviewTitle": "NOT cooling!",
      "reviewDescription": "Refrigerator is NOT cooling even after turning it all the way up past 5. Freezer is freezing some ice cream to rock hard but the refrigerator's lower section is barely 60 degrees. Had it for almost a week and tried everything and read all directions with no luck. Not happy."
    },
    
    {
      "ratingScore": 3,
      "reviewTitle": "Love the Red Retro Refrigerator, but,",
      "reviewDescription": "terrible packaging as it came dented, the bottom adjustable leg was bent and couldn't get the cap on it, on the side there were scratches and there were spots on the side that weren't thoroughly painted. Amozan would have sent me another one, but didn't want to repackage and send back, so I kept it . But love the style and so does everyone that sees it."
    },
    
    {
      "ratingScore": 3,
      "reviewTitle": "Came damaged but still works",
      "reviewDescription": "It came with so many scratches and big dents, and somehow the fridge door seems uneven? Returning is going to be such an annoying hassle so will be just using it but a pretty disappointing and unsatisfying purchase."
    },
    
    {
      "ratingScore": 2,
      "reviewTitle": "Came damaged. It really is super cute.",
      "reviewDescription": "Super cute fridge. I'm disappointed in the packing. The packaging was in ruff shape when it showed up. It has a dent on the side and a scratch on the front. I can kind of look past those two things, not that I want to. The worst is it had a missing adjustable foot on the left side and the one behind is bent. So frustrating on buying something new. It runs well and gets cold so that's good. Bigger than I thought and can hold quite a bit. Really don't want to return such a big item."
    },
    {
      "ratingScore": 5,
      "reviewTitle": "Love this fridge!",
      "reviewDescription": "Mine came in great condition! Love it for our small game room. Keeps drinks ice cold and has a nice freezer area!"
    },
    {
      "ratingScore": 2,
      "reviewTitle": "Lots of scratches on one side where no protective plastic had been put on.",
      "reviewDescription": "This is such a cute fridge and I really like it but it had damage. There is a protective plastic that comes on it but one side of it didn't have it and as a result was really scratched up badly. Everything else works fine."
    },
    {
      "ratingScore": 1,
      "reviewTitle": "Damaged - just like other reviews",
      "reviewDescription": "The refrigerator has major damage — huge dent on the side to the door and main body. Lots of scratches, with some quite deep that cut through the enamel finish. I worry those scratches will rust. The refrigerator appears to work. I dont know how to exchange or send this back. I do not recommend."
    },
    {
      "ratingScore": 1,
      "reviewTitle": "Very minimal packaging. Has dent. !",
      "reviewDescription": "The refrigerator bottom door is damaged there’s a big dent in it. There was hardly any Styrofoam or packaging protecting the item while it was inside the box. Pictured is all the Styrofoam that was contained inside the box to protect the refrigerator which amounts to absolutely nothing I want a new item that is not damaged."
    },
    {
      "ratingScore": 2,
      "reviewTitle": "Dent in 2 spots",
      "reviewDescription": "Has 2 dents. Don't want to hassle with sending back so just dealing with it ."
    },
    {
      "ratingScore": 1,
      "reviewTitle": "So exited to receive, didn't work extremely disappointed 😞",
      "reviewDescription": "Loved the look of the fridge. Temperature control hard to read. Motor never turned on. So disappointed."
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
          if (el.innerText.includes("single")) {
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
          if (el.innerText.includes("works well")) {
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
          if (el.innerText.includes("does not")) {
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
          if (el.innerText.includes("did not")) {
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
          if (el.innerText.includes("stops")) {
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







  