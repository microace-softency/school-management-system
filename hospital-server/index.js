const express = require("express");
app = express();
const cors = require("cors");

const db = require("./db");
app.use(cors());
app.use(express.json()); 

app.get("/", (req, res) => {
  res.send("hellow");
});

// app.get("/hospital", async (req, res) => {
//   try {
//     const sqlInsert =
//       "INSERT INTO appointment ( mobilenumber, name, location, age, symptomsdescription, durationofsymptoms, medicalhistory, medications, allergies, previoustreatments, frequencyandintensity, associatedfactors, emergencycontactname, emergencycontactphone, additionalcomments) VALUES('8965321458', 'apurbo', 'kanchrapara', '22', 'Fever, cough, headache', '10 days', 'None', 'None', 'None', 'None', 'Fever spikes to 101°F every 6 hours, persistent cough', 'Exposure to someone with a cold', 'bapon', '7854963258', 'Please provide over-the-counter cold medication recommendations')";
//     const result = await db.query(sqlInsert);
//     console.log("result", result);
//     res.send("Appointment Booked");
//   } catch (error) {
//     console.error("error", error);
//     res.status(500).send("Internal Server Error");
//   }
// });

//fatch data
app.get("/api/appointment", async (req, res) => {
  await db
    .query("SELECT * FROM appointment ")
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
});
// create appointment data
app.post("/api/createappointment", (req, res) => {
  const {
    mobilenumber,
    name,
    location,
    age,
    symptomsdescription,
    durationofsymptoms,
    medicalhistory,
    medications,
    allergies,
    previoustreatments,
    frequencyandintensity,
    associatedfactors,
    emergencycontactname,
    emergencycontactphone,
    additionalcomments
  } = req.body;

  const sqlInsert =
    "INSERT INTO appointment (mobilenumber, name, location, age, symptomsdescription, durationofsymptoms, medicalhistory, medications, allergies, previoustreatments, frequencyandintensity, associatedfactors, emergencycontactname, emergencycontactphone, additionalcomments) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

  db.query(
    sqlInsert,
    [
      mobilenumber,
      name,
      location,
      age,
      symptomsdescription,
      durationofsymptoms,
      medicalhistory,
      medications,
      allergies,
      previoustreatments,
      frequencyandintensity,
      associatedfactors,
      emergencycontactname,
      emergencycontactphone,
      additionalcomments
    ],
    (error, result) => {
      if (error) {
        console.error("Error inserting data:", error);
        res.status(500).send("Error inserting data into database");
      } else {
        console.log("Data inserted successfully");
        res.status(200).send("Appointment Created");
      }
    }
  );
});

//book remove
app.delete("/api/removeappointment/:id", (req, res)=>{
  const{id}= req.params
  const sqlRemove = "DELETE FROM appointment WHERE id = ?";
  db.query(sqlRemove,id, (error, result)=>{
    if(error){
      console.log(error);
    }
  })
});

//doctor master

app.get("/location", async (req, res) => {
  try {
    const sqlInsert =
      "INSERT INTO location ( address, district, pincode, pos, postoffice) VALUES('laketown west', 'North 14 PGS', '743154', 'jatia', 'kanchrapara')";
    const result = await db.query(sqlInsert);
    console.log("result", result);
    res.send("Appointment Booked");
  } catch (error) {
    console.error("error", error);
    res.status(500).send("Internal Server Error");
  }
});

//fatch doctor data
app.get("/api/doctor", async (req, res) => {
  await db
    .query("SELECT * FROM doctor ")
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
});
//create doctor 
app.post("/api/createdoctor", (req, res) => 
{
  const {
    doctorname,
    designation
  } = req.body;

  const sqlInsert =
    "INSERT INTO doctor (doctorname, designation) VALUES(?, ?)";

  db.query(
    sqlInsert,
    [
      doctorname,
      designation
    ],
    (error, result) => {
      if (error) {
        console.error("Error inserting data:", error);
        res.status(500).send("Error inserting data into database");
      } else {
        console.log("Data inserted successfully");
        res.status(200).send("Doctor Created");
      }
    }
  );
});

//book remove
app.delete("/api/removedoctor/:id", (req, res)=>{
  const{id}= req.params
  const sqlRemove = "DELETE FROM doctor WHERE id = ?";
  db.query(sqlRemove,id, (error, result)=>{
    if(error){
      console.log(error);
    }
  })
});

//get registation

app.get("/registation", async (req, res) => {
  try {
    const date = new Date('04/03/2024');
    const formattedDate = date.toISOString().split('T')[0];
    
    const sqlInsert =
      "INSERT INTO registation (date, location, name, image, mobilenumber, sex, age, doctorname, doctordesignation, time, type, price) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    
    const result = await db.query(sqlInsert, [
      formattedDate,
      'kanchrapara',
      'rahul',
      'none',
      '8569314558',
      'M',
      '26',
      'Dr.prasanto',
      'cardiologist',
      '10:25',
      'general',
      '100'
    ]);
    
    console.log("result", result);
    res.send("Registration succeeded");
  } catch (error) {
    console.error("error", error);
    res.status(500).send("Internal Server Error");
  }
});

//registation data fatch
app.get("/api/registation", async (req, res) => {
  await db
    .query("SELECT * FROM registation ")
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
});

//crete registation 
app.post("/api/createregistation", (req, res) => 
{
  const {
    date, location, name, image, mobilenumber, sex, age, doctorname, doctordesignation, time, type, price
  } = req.body;

  const sqlInsert =
    "INSERT INTO registation ( date, location, name, image, mobilenumber, sex, age, doctorname, doctordesignation, time, type, price ) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

  db.query(
    sqlInsert,
    [
      date, location, name, image, mobilenumber, sex, age, doctorname, doctordesignation, time, type, price
    ],
    (error, result) => {
      if (error) {
        console.error("Error inserting data:", error);
        res.status(500).send("Error inserting data into database");
      } else {
        console.log("Data inserted successfully");
        res.status(200).send("Doctor Created");
      }
    }
  );
});

//fatch location data
app.get("/api/location", async (req, res) => {
  await db
    .query("SELECT * FROM location ")
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
});

//crete location 
app.post("/api/createlocation", (req, res) => 
{
  const {
    address, district, pincode, pos, postoffice
  } = req.body;

  const sqlInsert =
    "INSERT INTO location ( address, district, pincode, pos, postoffice) VALUES(?, ?, ?, ?, ?)";

  db.query(
    sqlInsert,
    [
      address, district, pincode, pos, postoffice
    ],
    (error, result) => {
      if (error) {
        console.error("Error inserting data:", error);
        res.status(500).send("Error inserting data into database");
      } else {
        console.log("Data inserted successfully");
        res.status(200).send("Doctor Created");
      }
    }
  );
});

//location remove
app.delete("/api/removelocation/:id", (req, res)=>{
  const{id}= req.params
  const sqlRemove = "DELETE FROM location WHERE id = ?";
  db.query(sqlRemove,id, (error, result)=>{
    if(error){
      console.log(error);
    }
  })
});

db.query("SELECT 1")
  .then((data) => {
    console.log("db Cpnnection succeeded", data);
    app.listen(8005, () => console.log("server started at 8005"));
  })
  .catch((err) => console.log("db connection failed. \n" + err));

  