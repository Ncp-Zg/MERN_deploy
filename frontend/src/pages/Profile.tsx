import Button from "@mui/material/Button";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import PopupAlert from "../components/common/PopupAlert";
import { IRootState } from "../redux/Reducers/rootReducer";

const Profile = () => {
  const navigate: any = useNavigate();
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const { user } = useSelector((state: IRootState) => state.auth);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const abortCont = new AbortController();

    const getProfile = async () => {
      if (user.id !== "") {
        setLoading(true);
        await axios
          .get(
            "/api/users/profile",
            {
              withCredentials:true,
              signal:abortCont.signal
            }
          )
          .then((res) => {
            setLoading(false);
          })
          .catch((err) => {
            if (err.message === "canceled") {
              console.log("axios aborted");
            } else {
              console.log(err.response.data)
              setLoading(false);
              setError(true);
            }
          });
      }
    };

    getProfile();

    return ()=> abortCont.abort()
  }, [user]);

  return (
    <div>
      {user.id !== "" && !error ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3 style={{ display: "flex", justifyContent: "center" }}>PROFILE</h3>
          <img
            style={{ width: "20rem", height: "20rem", borderRadius: "100%" }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/694px-Unknown_person.jpg"
          />
          <Button
            variant="contained"
            sx={{ margin: "1rem" }}
            onClick={() => navigate("/profile/myorders")}
          >
            MyOrders
          </Button>
          <Button
            variant="contained"
            onClick={() => navigate("/profile/myfavorites")}
          >
            MyFavorites
          </Button>
        </div>
      ) : loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
          }}
        >
          <ClimbingBoxLoader size={30} color="#c67c03" />
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "70vh",
          }}
        >
          <PopupAlert
            open={open}
            handleClose={handleClose}
            handleOpen={handleOpen}
          />
        </div>
      )}
    </div>
  );
};

export default Profile;
