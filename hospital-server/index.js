const express = require("express");
app = express();
const cors = require("cors");

const db = require("./db");
app.use(cors());
app.use(express.json());

const bcrypt = require('bcrypt');


app.get("/", (req, res) => {
  res.send("hellow");
});

app.get("/test", async (req, res) => {
  try {
    const sqlInsert =
      "INSERT INTO test ( testname, amount, day) VALUES('Blood Test', '150', '1day')";
    const result = await db.query(sqlInsert);
    console.log("result", result);
    res.send("test create");
  } catch (error) {
    console.error("error", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/pathology", async (req, res) => {
  try {
    const sqlInsert =
      "INSERT INTO pathology ( patientname, testname, referDrName, totalAmount, advancePayment, duePayment, date) VALUES(  'rajnew', 'blood test', 'Dr.kashi' , '150', '50', '100', '18/03/2024')";
    const result = await db.query(sqlInsert);
    console.log("result", result);
    res.send("pathology patiant entry successfully");
  } catch (error) {
    console.error("error", error);
    res.status(500).send("Internal Server Error");
  }
});


// Login endpoint
// app.post('/api/login', async (req, res) => {
//   const { email, password } = req.body;

//   db.query('SELECT * FROM users WHERE email = ?', [email], async (error, results) => {
//     if (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     } else {
//       if (results.length > 0) {
//         const match = await bcrypt.compare(password, results[0].password);
//         if (match) {
//           const token = jwt.sign({ email: results[0].email }, 'your-secret-key', { expiresIn: '1h' });
//           res.json({ token });
//         } else {
//           res.status(401).json({ error: 'Invalid credentials' });
//         }
//       } else {
//         res.status(401).json({ error: 'Invalid credentials' });
//       }
//     }
//   });
// });

// app.post('/api/login', (req, res) => {
//   console.log('Request Body:', req.body); 

//   const { email, password } = req.body;

//   db.query('SELECT * FROM outdoreuser WHERE email = ? AND password = ?', [email, password], (error, results) => {
//     if (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     } else {
//       if (results.length > 0) {
//         res.json({ message: 'Login successful' });
//       } else {
//         res.status(401).json({ error: 'Invalid credentials' });
//       }
//     }
//   });
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
//----------------doctor----------------------//

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

//book doctor
app.delete("/api/removedoctor/:id", (req, res)=>{
  const{id}= req.params
  const sqlRemove = "DELETE FROM doctor WHERE id = ?";
  db.query(sqlRemove,id, (error, result)=>{
    if(error){
      console.log(error);
    }
  })
});

//doctor details view
app.get("/api/doctor/:id", async (req, res) => {
  const { id } = req.params;
  const sqlGet = "SELECT * FROM doctor WHERE id = ?";
  
  try {
    const result = await db.query(sqlGet, id);

    if (result.length === 0) {
      res.status(404).json({ error: 'class not found' });
    } else {
      res.json(result[0]);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//------------------test---------------------//

//fatch test data
app.get("/api/test", async (req, res) => {
  await db
    .query("SELECT * FROM test ")
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
});

//remove test data
app.delete("/api/removetest/:id", (req, res)=>{
  const{id}= req.params
  const sqlRemove = "DELETE FROM test WHERE id = ?";
  db.query(sqlRemove,id, (error, result)=>{
    if(error){
      console.log(error);
    }
  })
});

//create test data
app.post("/api/createtest", (req, res) => 
{
  const {
     testname, amount, day  
    } = req.body;

  const sqlInsert =
    "INSERT INTO test (  testname, amount, day) VALUES(?, ?, ?)";

  db.query(
    sqlInsert,
    [
       testname, amount, day
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

//get registation

app.get("/registation", async (req, res) => {
  try {
    const date = new Date('04/03/2024');
    const formattedDate = date.toISOString().split('T')[0];
    
    const sqlInsert =
      "INSERT INTO registation (date, location, name, image, mobilenumber, sex, age, doctorname, doctordesignation, time, type, price) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIME() now(), ?, ?)";
    
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
    date, location, name, image, mobilenumber, sex, age, doctorname, time, type, price
  } = req.body;
  // const imageBuffer = Buffer.from(image, 'base64');

  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split("T")[0]; // Format: YYYY-MM-DD
  const currentTime = currentDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }); // Format: HH:MM
  const sqlInsert =
    "INSERT INTO registation ( date, location, name, image, mobilenumber, sex, age, doctorname, time, type, price ) VALUES( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?  )";

  db.query(
    sqlInsert,
    [
      date, location, name, image, mobilenumber, sex, age, doctorname, time, type, price
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

//remove registation
app.delete("/api/removeregistation/:id", (req, res)=>{
  const{id}= req.params
  const sqlRemove = "DELETE FROM registation WHERE id = ?";
  db.query(sqlRemove,id, (error, result)=>{
    if(error){
      console.log(error);
    }
  })
});

//pataint details view
app.get("/api/registation/:id", async (req, res) => {
  const { id } = req.params;
  const sqlGet = "SELECT * FROM registation WHERE id = ?";
  try {
    const result = await db.query(sqlGet, id);

    if (result.length === 0) {
      res.status(404).json({ error: 'class not found' });
    } else {
      res.json(result[0]);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//pataint details update
// app.put("/api/classupdate/:id", async(req, res)=>{
//   const{id}= req.params;
//   const{classcode, classname}= req.body
//   const sqlUpdate = "UPDATE class SET classcode = ?, classname = ? WHERE id = ?";
//   await db.query(sqlUpdate, [classcode, classname, id], (error, result ) =>{
//     if (error) {
//       console.log(error);
//     }
//     res.send(result)
//   })
// });

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


//--------------------packeg---------------------//

//fatch packeg
app.get("/api/packeg", async (req, res) => {
  await db
    .query("SELECT * FROM packeg ")
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
});
//remove packeg
app.delete("/api/removeapackeg/:id", (req, res)=>{
  const{id}= req.params
  const sqlRemove = "DELETE FROM packeg WHERE id = ?";
  db.query(sqlRemove,id, (error, result)=>{
    if(error){
      console.log(error);
    }
  })
});

//create packeg
app.post("/api/createpackeg", (req, res) => 
{
  const {
    packegname, packegrate, packegnote
    } = req.body;

  const sqlInsert =
    "INSERT INTO registation (packegname, packegrate, packegnote ) VALUES( ?, ?, ? )";

  db.query(
    sqlInsert,
    [
       packegname, packegrate, packegnote    ],
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

///---------------outdoreuser----------------------//

//fatch outdore user
app.get("/api/outdoreuser", async (req, res) => {
  await db
    .query("SELECT * FROM outdoreuser ")
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
});

//create outdore user 
app.post("/api/createoutdoreuser", (req, res) => 
{
  const {
    email,
    password,
    location
  } = req.body;

  const sqlInsert =
    "INSERT INTO outdoreuser (email, password, location) VALUES(?, ?, ?)";

  db.query(
    sqlInsert,
    [
      email,
      password,
      location
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

//outdoreuser remove
app.delete("/api/removeoutdoreuser/:id", (req, res)=>{
  const{id}= req.params
  const sqlRemove = "DELETE FROM outdoreuser WHERE id = ?";
  db.query(sqlRemove,id, (error, result)=>{
    if(error){
      console.log(error);
    }
  })
});

//outdoreuser login

app.post('/login', async (req, res) => {
  console.log("requestbody", req.body);
  try {
    const { email, password } = req.body;
    
    const results = await db.query('SELECT * FROM outdoreuser WHERE email = ?', email);

    if (results.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    const user = results[0];

    const passwordMatch = await (password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Error fetching user' });
  }
});

//fatch pathology  user
app.get("/api/pathology", async (req, res) => {
  await db
    .query("SELECT * FROM pathology ")
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
});

//remove pathology user
app.delete("/api/removepathology/:id", (req, res)=>{
  const{id}= req.params
  const sqlRemove = "DELETE FROM pathology WHERE id = ?";
  db.query(sqlRemove,id, (error, result)=>{
    if(error){
      console.log(error);
    }
  })
});

//create pathology 
app.post("/api/createpathology", (req, res) => {
  const {
    patientname, 
    testname, 
    referDrName, 
    totalAmount, 
    advancePayment, 
    duePayment, 
    date
  } = req.body;

  const testnames = testname.map(test => test.testname);

  const testnamesString = testnames.join(', ');

  const sqlInsert =
    "INSERT INTO pathology (patientname, testname, referDrName, totalAmount, advancePayment, duePayment, date) VALUES(?, ?, ?, ?, ?, ?, ?)";

  db.query(
    sqlInsert,
    [
      patientname, 
      testnamesString, 
      referDrName, 
      totalAmount, 
      advancePayment, 
      duePayment, 
      date
    ],
    (error, result) => {
      if (error) {
        console.error("Error inserting data:", error);
        res.status(500).send("Error inserting data into database");
      } else {
        console.log("Data inserted successfully");
        res.status(200).send("New pathology patient Created");
      }
    }
  );
});



db.query("SELECT 1")
  .then((data) => {
    console.log("db Cpnnection succeeded", data);
    app.listen(8005, () => console.log("server started at 8005"));
  })
  .catch((err) => console.log("db connection failed. \n" + err));

  