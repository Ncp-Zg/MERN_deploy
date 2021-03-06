import { Button } from "@mui/material";
import axios from "axios";
import { lazy, Suspense, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { toast } from "react-toastify";
// import Step1 from "../../components/AddProduct/Step1";
// import Step2 from "../../components/AddProduct/Step2";
// import Step3 from "../../components/AddProduct/Step3";
import { IRootState } from "../../redux/Reducers/rootReducer";
import PopupAlert from "../../components/common/PopupAlert";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../../components/common/ErrorBoundary";
const Step1 = lazy(() => import("../../components/AddProduct/Step1"));
const Step2 = lazy(() => import("../../components/AddProduct/Step2"));
const Step3 = lazy(() => import("../../components/AddProduct/Step3"));

const AddProduct = () => {
  const [auth, setAuth] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const { user } = useSelector((state: IRootState) => state.auth);
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const abortCont = new AbortController();

    const getProfile = async () => {
      if (user.id !== "") {
        setLoading(true);

        await axios
          .get("/api/users/profile", {
            withCredentials: true,
            signal: abortCont.signal,
          })
          .then((res) => {
            if (res.data.success) {
              setAuth(true);
              setLoading(false);
            }
          })
          .catch((err) => {
            if (err.message === "canceled") {
              console.log("axios aborted");
            } else {
              setLoading(false);
              setAuth(false);
            }
          });
      }
    };

    getProfile();

    return () => abortCont.abort();
  }, [user]);

  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    category: "",
    description: "",
    stock: 0,
    cost: 0,
    title: "",
    seller: "",
    img: [],
  });

  const FormTitles = ["Step 1", "Step 2", "Step 3"];

  const PageDisplay = () => {
    if (page === 0) {
      return <Step1 formdata={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Step2 formdata={formData} setFormData={setFormData} />;
    } else {
      return <Step3 formdata={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {auth ? (
        <>
          <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
            <Suspense fallback={<div>Loading...</div>}>
              <form
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h3>{FormTitles[page]}</h3>

                <div style={{ width: "100%" }}>{PageDisplay()}</div>
              </form>
              <div
                style={{
                  display: "flex",
                  marginTop: "20px",
                  alignSelf: "center",
                }}
              >
                <Button
                  variant="contained"
                  disabled={page === 0}
                  onClick={() => {
                    setPage((currPage) => currPage - 1);
                  }}
                  sx={{ marginRight: "10px" }}
                >
                  Previous
                </Button>
                <Button
                  variant="contained"
                  color={page === FormTitles.length - 1 ? "success" : "primary"}
                  onClick={async (e) => {
                    if (page === FormTitles.length - 1) {
                      if (!isNaN(formData.stock) && !isNaN(+formData.cost)) {
                        e.preventDefault();
                        await axios
                          .post(
                            "/api/products/add",
                            {
                              category: formData.category,
                              cost: formData.cost,
                              desc: formData.description,
                              stock: formData.stock,
                              title: formData.title,
                              img: formData.img,
                            },
                            {
                              withCredentials: true,
                            }
                          )
                          .then((res) => {
                            toast.success("Product added successfully");
                            navigate("/home");
                          });
                      } else {
                        toast.error(
                          "provide a valid stock or cost for the product"
                        );
                      }
                    } else {
                      setPage((currPage) => currPage + 1);
                    }
                  }}
                  sx={{}}
                >
                  {page === FormTitles.length - 1 ? "Submit" : "Next"}
                </Button>
              </div>
            </Suspense>
          </ErrorBoundary>
        </>
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

export default AddProduct;
