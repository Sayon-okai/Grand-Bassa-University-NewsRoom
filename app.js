import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

const app = express();

let port = 3000;

// Setup
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let post;

const newsPosts = ` [{"id":1,"author":"GBU News Desk","title":"Grand Bassa University Resumes Academic Activities","post":"Grand Bassa University has officially resumed academic activities for the new semester. Students returned to campus early Monday morning, and lectures commenced as scheduled across all departments. The administration encouraged students to remain focused and adhere to campus regulations throughout the semester.","picture":"https://images.unsplash.com/photo-1758270703156-8d6c7a781fc2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVzdW1lJTIwYWNhZGVtaWMlMjBhfGVufDB8fDB8fHww","date":"2026-01-05"},{"id":2,"author":"Student Affairs Office","title":"Orientation Program Held for Freshmen Students","post":"The Office of Student Affairs organized a comprehensive orientation program for newly admitted students. The event introduced freshmen to campus life, academic expectations, and available support services. University officials urged students to take advantage of academic counseling and extracurricular opportunities.","picture":"https://images.unsplash.com/photo-1663247455965-b63fa4048b29?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3R1ZGVudCUyMG9yaWVudGF0aW9ufGVufDB8fDB8fHww","date":"2026-01-06"},{"id":3,"author":"GBU Sports Unit","title":"GBU Football Team Begins Training Ahead of Inter-University Games","post":"The Grand Bassa University football team has commenced intensive training in preparation for the upcoming inter-university sports competition. Coaches expressed confidence in the team’s readiness and called on students to support their athletes during the tournament.","picture":"https://images.unsplash.com/photo-1543326132-ca084138998f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vdGJhbGwlMjB0ZWFtJTIwcmVzdW1lJTIwdHJhaW5pbmd8ZW58MHx8MHx8fDA%3D","date":"2026-01-07"},{"id":4,"author":"Academic Affairs","title":"New Academic Calendar Released for 2026 Session","post":"The Academic Affairs Office has released the official academic calendar for the 2026 session. The calendar outlines important dates including registration periods, mid-semester examinations, and final exams. Students are advised to review the schedule carefully and plan accordingly.","picture":"https://images.unsplash.com/vector-1766951039350-9063fee6c14b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fDIwMjZ8ZW58MHx8MHx8fDA%3D","date":"2026-01-08"},{"id":5,"author":"Library Services","title":"University Library Extends Reading Hours","post":"Grand Bassa University Library has announced extended reading hours to better support students during the semester. The library will now remain open until 10:00 PM on weekdays, providing students with additional study time and access to research materials.","picture":"https://images.unsplash.com/photo-1524995997946-a1c2e315a42f","date":"2026-01-09"},{"id":6,"author":"GBU Health Center","title":"Free Medical Screening Conducted on Campus","post":"The GBU Health Center successfully conducted a free medical screening exercise for students and staff. Services included blood pressure checks, malaria testing, and general consultations. Participants were encouraged to maintain healthy lifestyles.","picture":"https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1lZGljYWwlMjBjbGluaWN8ZW58MHx8MHx8fDA%3D","date":"2026-01-10"},{"id":7,"author":"ICT Department","title":"University Launches New Online Student Portal","post":"The ICT Department has launched a new online student portal designed to improve access to academic records, course registration, and announcements. Students are advised to update their login details and report any technical issues to the ICT help desk.","picture":"https://images.unsplash.com/photo-1763718432504-7716caff6e99?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFN0dWRlbnQlMjBQb3J0YWx8ZW58MHx8MHx8fDA%3D","date":"2026-01-11"},{"id":8,"author":"GBU Research Unit","title":"Faculty Members Present Research at National Conference","post":"Several faculty members from Grand Bassa University recently presented research papers at a national academic conference. The presentations highlighted the university’s commitment to research, innovation, and national development.","picture":"https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJlc2VhcmNofGVufDB8fDB8fHww","date":"2026-01-12"},{"id":9,"author":"Campus Security","title":"University Strengthens Campus Security Measures","post":"The university administration has announced enhanced security measures across campus to ensure the safety of students and staff. Additional security personnel have been deployed, and students are encouraged to report suspicious activities immediately.","picture":"https://images.unsplash.com/photo-1652739758426-56a564265f9e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VW5pdmVyc2l0eSUyMFN0cmVuZ3RoZW5zJTIwQ2FtcHVzJTIwU2VjdXJpdHklMjBNZWFzdXJlc3xlbnwwfHwwfHx8MA%3D%3D","date":"2026-01-13"},{"id":10,"author":"Public Relations Office","title":"GBU Celebrates Outstanding Students at Award Ceremony","post":"Grand Bassa University held an award ceremony to recognize outstanding students for academic excellence and leadership. University officials praised the recipients and encouraged all students to strive for excellence in their studies and personal development.","picture":"https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8T2ZmaWNlfGVufDB8fDB8fHww","date":"2026-01-14"}]`

const posts = JSON.parse(newsPosts);

post = JSON.parse(newsPosts)

app.get("/", (req, res) => {
       res.render("signin.ejs",)
});




app.get("/news", (req, res) => {
     res.render("index.ejs", {
        data: post,
        highOne: post[0],
        highTwo: post[1],
        highThree: post[3],

       highOnePost: post[0].post.slice(0, 100) + '...',
       highTwoPost: post[1].post.slice(0, 70) + '...',
         highThreePost: post[3].post.slice(0, 70) + '...',
       
          

     })
})

app.get("/index", (req, res) => {
    res.redirect("/")
})

app.post("/register", (req, res) => {
  console.log(req.body.email);
   res.redirect("/news")
});
app.listen(port, () => {
   console.log(`server is running on port ${port}`); 
})