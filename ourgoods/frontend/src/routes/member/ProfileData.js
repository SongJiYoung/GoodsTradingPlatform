import React, { useEffect, useState } from "react";
import UserTable from "../../components/mypageTable/UserTable";
import 'antd/dist/antd.css';
import axios from "axios";


const ProfileData = () => {

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: 'my_page/hello',
    }).then((res) => {
      setUserData(res.data);
    })
    .catch((err) => {
      throw err;
    });
  },[]) ;

  return (
    <>
      <UserTable userData={userData} />
    </>
  );
};

export default ProfileData;

