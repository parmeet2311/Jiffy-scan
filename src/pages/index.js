import HackCard from "@/components/hackathonCard";
import { useState } from "react";
import Tab from "@mui/material/Tab";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import Typography from "@mui/material/Typography";
import { FilterComponent } from "@/components/filter";
import { Search3 } from "@/components/customSearch";

export default function Home() {
  const [value, setValue] = useState("1");
  const [skillName, setSkillName] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const data = [
    {
      category: "completed",
      imgSrc: "/assets/card/Rectangle1.png",
      title: "Design Earn Talent Leaderboard",
      by: "Superteam",
      money: "700",
      rank: "1st",
      skills: ["design"],
      date: "04/04/2023",
      participants: 36,
    },
    {
      category: "completed",
      imgSrc: "/assets/card/Rectangle2.png",
      title: "Armada UI/UX Review",
      by: "Dean's List Dao",
      money: "",
      rank: "",
      skills: ["design"],
      date: "21/03/2023",
      participants: 7,
    },
    {
      category: "completed",
      imgSrc: "/assets/card/Rectangle3.png",
      title: "Create a Frame for Farcaster",
      by: "Deribet",
      money: "500",
      rank: "1st",
      skills: ["frontend", "backend", "blockchain"],
      date: "14/03/2023",
      participants: 20,
    },
    {
      category: "completed",
      imgSrc: "/assets/card/Rectangle4.png",
      title: "Write a thread with memes for PP Program on Solana",
      by: "pSTAKE Finance",
      money: "100",
      rank: "3rd",
      skills: ["content"],
      date: "06/03/2023",
      participants: 12,
    },

    //In Review
  
    {
      category: "In Review",
      imgSrc: "/assets/card/Rectangle2.png",
      title: "Armada UI/UX Review",
      by: "Dean's List Dao",
      money: "",
      rank: "",
      skills: ["design"],
      date: "21/03/2023",
      participants: 7,
    },
    {
      category: "In Review",
      imgSrc: "/assets/card/Rectangle1.png",
      title: "Design Earn Talent Leaderboard",
      by: "Superteam",
      money: "700",
      rank: "1st",
      skills: ["design"],
      date: "04/04/2023",
      participants: 36,
    },
    {
      category: "In Review",
      imgSrc: "/assets/card/Rectangle4.png",
      title: "Write a thread with memes for PP Program on Solana",
      by: "pSTAKE Finance",
      money: "100",
      rank: "3rd",
      skills: ["content"],
      date: "06/03/2023",
      participants: 12,
    },
    {
      category: "In Review",
      imgSrc: "/assets/card/Rectangle3.png",
      title: "Create a Frame for Farcaster",
      by: "Deribet",
      money: "500",
      rank: "1st",
      skills: ["frontend", "backend", "blockchain"],
      date: "14/03/2023",
      participants: 20,
    },
  ];


  const filteredData = data.filter((item) =>
    skillName.length === 0
      ? true
      : item.skills.some((skill) =>
          skillName
            .map((name) => name.toLowerCase())
            .includes(skill.toLowerCase())
        )
  );

  return (
    <div className="container my-8 ">
      <div className="flex">
        <div className="w-full lg:w-[70%] xl:w-[60%]">
          <TabContext value={value}>
            <div className="flex justify-between border-b-[2px] pb-3 lg:pb-0 items-center">
              <div className="flex items-center">
                <div>
                  <h6 className="text-lg font-inter text-black font-semibold">
                    Work History
                  </h6>
                </div>
                <div className="w-[1px] h-[24px] bg-gray-300 mx-4 hidden lg:block"></div>
                <div className="hidden lg:block">
                  <TabList
                    onChange={handleChange}
                    aria-label="simple tabs example"
                  >
                    <Tab value="1" label="Completed" />
                    <Tab value="2" label="In Review" />
                  </TabList>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-[1px] h-[24px] bg-gray-300 mx-4 hidden lg:block"></div>
                <FilterComponent
                  skillName={skillName}
                  setSkillName={setSkillName}
                />
              </div>
            </div>
            <div className="lg:hidden w-full flex justify-center mt-3">
              <TabList onChange={handleChange} aria-label="simple tabs example">
                <Tab value="1" label="Completed" />
                <Tab value="2" label="In Review" />
              </TabList>
            </div>
            <TabPanel
              sx={{ padding: "0", paddingTop: "20px" }}
              value="1"
              className="flex flex-col gap-y-[1.5rem]"
            >
              {filteredData.filter((i) => i.category === "completed").length ===
              0 ? (
                <p className="font-inter text-center">No data available</p>
              ) : (
                filteredData
                  .filter((i) => i.category === "completed")
                  .map((item, index) => <HackCard key={index} data={item} />)
              )}
            </TabPanel>

            <TabPanel
              sx={{ padding: "0" }}
              value="2"
              className="flex flex-col gap-y-[1.5rem]"
            >
              {filteredData.filter((i) => i.category === "In Review").length ===
              0 ? (
                <p className="font-inter text-center">No data available</p>
              ) : (
                filteredData
                  .filter((i) => i.category === "In Review")
                  .map((item, index) => <HackCard key={index} data={item} />)
              )}
            </TabPanel>
          </TabContext>
        </div>
        <div style={{ height: "88vh" }} className="w-[1px] hidden lg:block min-h-full bg-gray-300 mx-8"></div>
        <div className="lg:w-[30%] xl:w-[40%] hidden lg:block">
          <Search3 />
        </div>
      </div>
    </div>
  );
}
