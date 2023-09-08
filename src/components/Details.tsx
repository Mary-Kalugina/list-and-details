import React, {useEffect, useState} from "react";

interface DetailsProps {
    info: {id: number, name: string};
}

interface UserData {
    id: number;
    name: string;
    avatar: string;
    details: {
      city: string;
      company: string;
      position: string;
    };
  }  

const Details: React.FC<DetailsProps> = ({ info }) => {

    const [details, setDetails] = useState<UserData | null>(null);

    useEffect(() => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`);
        xhr.onreadystatechange = () => {
          if (xhr.readyState !== 4) return;
          if (xhr.status >= 200 && xhr.status < 300) {
            try {
              const data = JSON.parse(xhr.response);
              setDetails(data);
              console.log(data)
            } catch (e) {
              console.error(e);
            }
          }
        };
        xhr.send();
    }, [info])
  return (
    <div className="details">
        <img src={details?.avatar}/>   
        <h3>{details?.name}</h3>
        <h5>{details?.details.city}</h5>
        <h5>{details?.details.company}</h5>
        <h5>{details?.details.position}</h5>
    </div>
  );
}

export default Details;
