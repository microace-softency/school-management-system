import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignIn from "./pages/SingIn";
import PrivateRoute from "./components/PrivateRoute";
import { AuthContextProvider } from "./utils/AuthContext";
import ClassMaster from "./pages/master/ClassMaster";
import Dashbord from "./pages/Dashbord";
import SectionMaster from "./pages/master/SectionMaster";
import SubjectMaster from "./pages/master/SubjectMaster";
import FeeMaster from "./pages/master/FeeMaster";
import StudentMaster from "./pages/master/StudentMaster";
import ExaminationMaster from "./pages/master/ExaminationMaster";
import StaffMaster from "./pages/master/StaffMaster";
import FeeReceive from "./pages/entry/FeeReceive";
import SingleVoucher from "./pages/entry/SingleVoucher";
import MarkSheet from "./pages/entry/MarkSheet";
import AttendanceRemark from "./pages/entry/AttendanceRemark";
import TransferNextYear from "./pages/entry/TransferNextYear";
import PaymentVoucher from "./pages/entry/PaymentVoucher";
import SportFeeReceive from "./pages/entry/SportFeeReceive";
import BookMaster from "./pages/library/BookMaster";
import BookReceiveIssue from "./pages/library/BookReceiveIssue";
import Hostel from "./pages/hostel/Hostel";
import HostelFeeMaster from "./pages/hostel/HostelFeeMaster";
import HostelFeeReceive from "./pages/hostel/HostelFeeReceive";
import StaffMasterPayRoll from "./pages/PayrollSytem/StaffMasterPayRoll";
import SalaryEntry from "./pages/PayrollSytem/SalaryEntry";
import GeneralLedger from "./pages/master/GeneralLedger";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthContextProvider>
          <Routes>
            <Route path="/singin" element={<SignIn />} />
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/" element={<Dashbord />} />

              <Route path="/generalledger" element={<GeneralLedger />} />
              <Route path="/classmaster" element={<ClassMaster />} />
              <Route path="/sectionmaster" element={<SectionMaster />} />
              <Route path="/subjectmaster" element={<SubjectMaster />} />
              <Route path="/feemaster" element={<FeeMaster />} />
              <Route path="/studentmaster" element={<StudentMaster />} />
              <Route
                path="/examinationmaster"
                element={<ExaminationMaster />}
              />
              <Route path="/staffmaster" element={<StaffMaster />} />

              <Route path="/feereceive" element={<FeeReceive />} />
              <Route path="/singlevoucher" element={<SingleVoucher />} />
              <Route path="/marksheet" element={<MarkSheet />} />
              <Route path="/attendanceremark" element={<AttendanceRemark />} />
              <Route path="/transfernextyer" element={<TransferNextYear />} />
              <Route path="/paymentvoucher" element={<PaymentVoucher />} />
              <Route path="/sportfeereceive" element={<SportFeeReceive />} />

              <Route path="/bookmaster" element={<BookMaster />} />
              <Route path="/bookreceiveissue" element={<BookReceiveIssue />} />

              <Route path="/hostel" element={<Hostel />} />
              <Route path="/hostelfeeMaster" element={<HostelFeeMaster />} />
              <Route path="/hostelfeereceive" element={<HostelFeeReceive />} />

              <Route path="/staffpayroll" element={<StaffMasterPayRoll />} />
              <Route path="/salaryentry" element={<SalaryEntry />} />
            </Route>
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
