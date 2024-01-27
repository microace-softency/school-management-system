import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignIn from './pages/SingIn';
import PrivateRoute from './components/PrivateRoute';
import { AuthContextProvider } from './utils/AuthContext';
import ClassMaster from './pages/master/ClassMaster';
import Dashbord from './pages/Dashbord';
import SectionMaster from './pages/master/SectionMaster';
import SubjectMaster from './pages/master/SubjectMaster';
import FeeMaster from './pages/master/FeeMaster';
import StudentMaster from './pages/master/StudentMaster';
import ExaminationMaster from './pages/master/ExaminationMaster';
import StaffMaster from './pages/master/StaffMaster';
import FeeReceive from './pages/entry/FeeReceive';
import SingleVoucher from './pages/entry/SingleVoucher';
import MarkSheet from './pages/entry/MarkSheet';
import AttendanceRemark from './pages/entry/AttendanceRemark';
import TransferNextYear from './pages/entry/TransferNextYear';
import PaymentVoucher from './pages/entry/PaymentVoucher';
import SportFeeReceive from './pages/entry/SportFeeReceive';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthContextProvider>
          <Routes>
            <Route path='/singin' element={<SignIn/>}/>
            <Route path='/' element={<PrivateRoute/>}>
            <Route path='/' element={<Dashbord/>}/>

            <Route path='/classmaster' element={<ClassMaster/>}/>
            <Route path='/sectionmaster' element={<SectionMaster/>}/>
            <Route path='/subjectmaster' element={<SubjectMaster/>}/>
            <Route path='/feemaster' element={<FeeMaster/>}/>
            <Route path='/studentmaster' element={<StudentMaster/>}/>
            <Route path='/examinationmaster' element={<ExaminationMaster/>}/>
            <Route path='/staffmaster' element={<StaffMaster/>}/>

            <Route path='/feereceive' element={<FeeReceive/>}/>
            <Route path='/singlevoucher' element={<SingleVoucher/>}/>
            <Route path='/marksheet' element={<MarkSheet/>}/>
            <Route path='/attendanceremark' element={<AttendanceRemark/>}/>
            <Route path='/transfernextyer' element={<TransferNextYear/>}/>
            <Route path='/paymentvoucher' element={<PaymentVoucher/>}/>
            <Route path='/sportfeereceive' element={<SportFeeReceive/>}/>
            </Route>
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;