import React, { useMemo } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import styles from "../styles/Home.module.css";

const MainArea = () => {
  const user = { name: "Jay", age: 78 };
  const person = useMemo(() => ({ name: user.name, age: user.age + 40 }), [user]);
  console.log(person);
  const center = useMemo(() => ({ lat: 51.4726548, lng: -0.1018549 }));

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBDMmKTEbqIlGkP8ZC1tRhF-JHYVbuMuH0",
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading ....</div>;
  return (
    <div className=" w-[95%] mx-auto grid md:grid-flow-col gap-2 md:grid-cols-3">
    
    </div>
  );
};

export default MainArea;
