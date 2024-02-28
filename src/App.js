import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignIn from "./pages/SingIn";
import PrivateRoute from "./components/PrivateRoute";
import { AuthContextProvider } from "./utils/AuthContext";
import ClassMaster from "./pages/master/class/ClassMaster";
import ClassList from "./pages/master/class/ClassList";
import Dashbord from "./pages/Dashbord";
import SectionMaster from "./pages/master/section/SectionMaster";
import SectionList from "./pages/master/section/SectionList";
import SubjectMaster from "./pages/master/SubjectMaster";
import FeeMaster from "./pages/master/FeeMaster";
import StudentMaster from "./pages/master/student/StudentMaster";
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
import ConveyanceMaster from "./pages/master/ConveyanceMaster";
import NewAccount from "./pages/Account/NewAccount";
import UserMaster from "./pages/Account/preferencd/UserMaster";
import SecuriityRightsGroups from "./pages/Account/preferencd/SecuriityRightsGroups";
import FeeDiscountSetp from "./pages/Account/preferencd/FeeDiscountSetup";
import HostelFeeDiscountSetup from "./pages/Account/preferencd/HostelFeeDiscountSetup";
import SportsMaster from "./pages/master/sport/SortsMaster";
import Player from "./pages/master/sport/Player";
import StudentList from "./pages/master/student/StudentList";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import BookMasterList from "./pages/library/BookMasterList";
import ViewBookMaster from "./pages/library/ViewBookMaster";
import ViewClass from "./pages/master/class/ViewClass";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ToastContainer />

        <AuthContextProvider>
          <Routes>
            <Route path="/singin" element={<SignIn />} />
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/" element={<Dashbord />} />

              <Route path="/generalledger" element={<GeneralLedger />} />
              <Route path="/classmaster" element={<ClassMaster />} />
              <Route path="/classmaster/:id" element={<ClassMaster />} />
              <Route path="/viewclassmaster/:id" element={<ViewClass />} />
              <Route path="/classlist" element={<ClassList />} />
              <Route path="/sectionmaster" element={<SectionMaster />} />
              <Route path="/sectionlist" element={<SectionList />} />
              <Route path="/subjectmaster" element={<SubjectMaster />} />
              <Route path="/feemaster" element={<FeeMaster />} />
              <Route path="/studentmaster" element={<StudentMaster />} />
              <Route path="/studentmaster/:id" element={<StudentMaster />} />
              <Route path="/studentlist" element={<StudentList />} />
              <Route
                path="/examinationmaster"
                element={<ExaminationMaster />}
              />
              <Route path="/staffmaster" element={<StaffMaster />} />
              <Route path="/conveyanceMaster" element={<ConveyanceMaster />} />
              <Route path="/sportmaster" element={<SportsMaster />} />
              <Route path="/player" element={<Player />} />


              <Route path="/newaccount" element={<NewAccount />} />
              <Route path="/usermaster" element={<UserMaster />} />
              <Route path="/userpermissions" element={<SecuriityRightsGroups />} />
              <Route path="/feediscountsetup" element={<FeeDiscountSetp />} />
              <Route path="/hostelfeediscountsetup" element={<HostelFeeDiscountSetup />} />

              <Route path="/feereceive" element={<FeeReceive />} />
              <Route path="/singlevoucher" element={<SingleVoucher />} />
              <Route path="/marksheet" element={<MarkSheet />} />
              <Route path="/attendanceremark" element={<AttendanceRemark />} />
              <Route path="/transfernextyer" element={<TransferNextYear />} />
              <Route path="/paymentvoucher" element={<PaymentVoucher />} />
              <Route path="/sportfeereceive" element={<SportFeeReceive />} />

              <Route path="/bookmasterlist" element={<BookMasterList />} />
              <Route path="/bookmaster" element={<BookMaster />} />
              <Route path="/bookmaster/:id" element={<BookMaster />} />
              <Route path="/viewbookmaster/:id" element={<ViewBookMaster />} />
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
