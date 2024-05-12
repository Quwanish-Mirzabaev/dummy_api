import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Userpage.css";


function UserPage() {
  const [user, setUser] = useState([]);
  const { Id } = useParams();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/users/${Id}`)
      .then((res) => {
        setUser([res.data]);
      })
      .catch((error) => {
        console.error("Ошибка при загрузке товаров:", error);
      });
  }, [Id]);

  return (
    <>
      {user.map((info) => {
        return (
          <div className="user-cont">
            <div className="user-info-div">
              <div className="user-image">
                <img className="img" src={info.image} alt="" />
              </div>
              <div className="user-inf">
                <label  >Firs Name:</label>
                <span>{info.firstName}</span>
              </div>
              <div className="user-inf">
                <label>Last Name</label>
                <span>{info.lastName}</span>
              </div>
              <div className="user-inf">
                <label>Maiden Name </label>
                <span> {info.maidenName} </span>
              </div>
              <div className="user-inf">
                <label>email </label>
                <span>{info.email} </span>
              </div>
              <div className="user-inf">
                <label>phone </label>
                <span>{info.phone} </span>
              </div>
              <div className="user-inf">
                <label>Gender </label>
                <span>{info.gender} </span>
              </div>
              <div className="user-inf">
                <label>Username </label>
                <span>{info.username} </span>
              </div>
              <div className="user-inf">
                <label>password </label>
                <span>{info.password} </span>
              </div>
              <div className="user-inf">
                <label> Birth data</label>
                <span>{info.birthDate} </span>
              </div>
              <div className="user-inf">
                <label>Height </label>
                <span>{info.height} </span>
              </div>
              <div className="user-inf">
                <label>Weight </label>
                <span>{info.weight} </span>
              </div>
              <div className="user-inf">
                <label>eyeColor </label>
                <span>{info.eyeColor} </span>
              </div>
              <div className="user-inf">
                <label>Domian </label>
                <span>{info.domain} </span>
              </div>
              <div className="user-inf">
                <label> Addres </label>
                <span>{info.address.address} </span>
              </div >
              <div className="user-inf">
                <label>City</label>
                <span>{info.address.city} </span>
              </div>
              <div className="user-inf">
                <label>Univercity </label>
                <span>{info.university} </span>
              </div >
              <div className="user-inf">
                <label> Bank </label>
                <span>{info.bank.cardEXpire} </span>
              </div >
              <div className="user-inf">
                <label> Card Number </label>
                <span>{info.bank.cardNumber} </span>
              </div>
              <div className="user-inf">
                <label> Departament </label>
                <span>{info.company.department} </span>
              </div>
              <div className="user-inf">
                <label> Dep Name </label>
                <span>{info.company.name} </span>
              </div>
            </div >
            <div className="user-inf">
              <span></span>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default UserPage;
