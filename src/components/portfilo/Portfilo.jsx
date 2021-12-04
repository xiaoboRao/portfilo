import PortfolioList from "../portfolioList/PortfolioList";
import { useEffect, useState } from "react";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../componentData/portfiloData";
import "./portfilo.scss";
export default function Portfilo() {
  const [selected, setSelected] = useState("featured");
  const [selectedPortfolios, setSelectedPortfolios] = useState([]);
  useEffect(() => {
    switch (selected) {
      case "featured":
        setSelectedPortfolios(featuredPortfolio);
        break;
      case "web":
        console.log("web");
        setSelectedPortfolios(webPortfolio);
        break;
      case "mobile":
        setSelectedPortfolios(mobilePortfolio);
        break;
      case "design":
        setSelectedPortfolios(designPortfolio);
        break;
      case "content":
        setSelectedPortfolios(contentPortfolio);
        break;
      default:
        break;
    }
  }, [selected]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];
  return (
    <div className="portfilo" id="portfilo">
      <h1>Portfilo</h1>
      <div className="title">
        <ul>
          {list.map((item) => (
            <PortfolioList
              key={item.id}
              id={item.id}
              title={item.title}
              active={item.id === selected}
              setSelected={setSelected}
            />
          ))}
        </ul>
      </div>
      <div className="container">
        <ul>{selectedPortfolios.map((portfolio) =>(
            <li key={portfolio.id}><img src={portfolio.img} alt="" /><h3>{portfolio.title}</h3></li>
        ) )}</ul>
      </div>
    </div>
  );
}
