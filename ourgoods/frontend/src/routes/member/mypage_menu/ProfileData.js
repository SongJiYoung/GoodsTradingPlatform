import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Table from "../../../elements/Table";

function ProfileData() {

    const columnsList = useMemo(()=> [
        {
          accessor: "id",
          Header: "ID",
        },
        {
          accessor: "name",
          Header: "Name",
        },
        {
          accessor: "pw",
          Header: "PassWord",
        },
        {
          accessor: "email",
          Header: "Email",
        },
        {
          accessor: "phone",
          Header: "Phone",
        },
        {
          accessor: "edit",
          Header: "Edit",
        },
        {
          accessor: "delete",
          Header: "Delete",
        },
    ], []);

    // useEffect(()=>{
    //     axios.get('')
    //     .then(res => setInfo(res.data))
    //     .catch(err => console.log(err));
    // }, []);

    const arrayList = [
      {
          id: "1",
          name: "정인",
          pw: "1234",
          email: "wjddls@naver.com",
          phone: "010-6539-6133",
          edit: <Link to={`/accounts/myPage/InfoEdit`}>수정하기</Link>,
          delete: <Link to={`/accounts/myPage`}>탈퇴하기</Link>,
      },
       {
          id: "2",
          name: "성재",
          pw: "123456",
          email: "six@naver.com",
          phone: "010-0000-0000",
          edit: <Link to={`/accounts/myPage/InfoEdit`}>수정하기</Link>,
          delete: <Link to={`/accounts/myPage`}>탈퇴하기</Link>,
      },
       {
          id: "3",
          name: "승헌",
          pw: "12347777",
          email: "sh@naver.com",
          phone: "010-6690-6764",
          edit: <Link to={`/accounts/myPage/InfoEdit`}>수정하기</Link>,
          delete: <Link to={`/accounts/myPage`}>탈퇴하기</Link>,
      },
       {
          id: "4",
          name: "은광",
          pw: "1234789",
          email: "sliverlight@naver.com",
          phone: "010-5689-6487",
          edit: <Link to={`/accounts/myPage/InfoEdit`}>수정하기</Link>,
          delete: <Link to={`/accounts/myPage`}>탈퇴하기</Link>,
      },
       {
          id: "5",
          name: "우식",
          pw: "123445679",
          email: "us@naver.com",
          phone: "010-8462-6873",
          edit: <Link to={`/accounts/myPage/InfoEdit`}>수정하기</Link>,
          delete: <Link to={`/accounts/myPage`}>탈퇴하기</Link>,
      },
  ];

    const [info, setInfo] = useState(arrayList);

    const getInfo = () => {
    data.getInfo().then(item => setInfo(item));
    };

    const data = useMemo(() => info, [info]);


    return <Table columns={columnsList} data={data} />
};

export default ProfileData;