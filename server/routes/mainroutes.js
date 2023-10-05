// const User = require("../models/userModel");
const authController = require("../controllers/authController");
// const userController = require("../controllers/userController");
const postController = require("../controllers/postController");
// const authuser = require("../models/authModel");
// const { verifyOtp } = require("../utils/twilio");
const router = require("express").Router();

router.post("/register", authController.register);
router.post("/login", authController.login);

router.get("/", (req, res) => {
  res.render("landing_page");
});

// // ------------------- Routing for dashboard using google oauth--------------------

// var UserDetails;
// router.get("/Odashboard", authcheck, async (req, res) => {
//   UserDetails = req.user;
//   let auth_olduser = await authuser.find({ email: UserDetails.email });
//   // console.log(req.path);
//   auth_olduser.forEach((obj) => {
//     UserDetails = obj;
//   });
//   // console.log(UserDetails.id);
//   try {
//     res.render("auth-dashboard", {
//       id: UserDetails._id,
//       naam: UserDetails.name,
//       gmail: UserDetails.email,
//       pic: UserDetails.photo,
//     });
//   } catch (error) {
//     res.redirect("/");
//   }
// });

// var dbuser;
// router.get("/O-profile/:id", authcheck, async (req, res) => {
//   // res.send(req.body);
//   let dbuser;
//   dbuser = await authuser.findById(UserDetails);

//   try {
//     res.render("auth-profile", {
//       id: dbuser._id,
//       name: dbuser.name,
//       pic: dbuser.photo,
//       email: dbuser.email,
//     });
//   } catch (error) {
//     console.log(error);
//   }
//   // console.log(user, req.params.id);
// });
// // ------------------- end of Routing for dashboard using google oauth--------------------

// // -----------------------Routing for dashboard using Register ----------------------------------
// var userdetails;
router.get(
  "/dashboard",
  //   authController.protect,
  //   postController.getUserPosts,
  async (req, res) => {
    //     let oldUser = await User.find({ email: req.body.email });
    //     oldUser.forEach((obj) => {
    //       userdetails = obj;
    //     });
    try {
      res.render("dashboard", {
        id: "abc1" + "as",
        name: "abc1",
        gmail: "abc1",
        phone: "abc1",
        pic: "abc1",
        num: "0",
        post: "3",
      });
    } catch (err) {
      res.redirect("/");
    }
  }
);

router.get("/register", (req, res) => {
  res.render("signup_multiform");
});

// // -----------------------Routing for Profile ----------------------------------
// router.get("/profile/:id", authController.protect, async (req, res) => {
//   let user;
//   if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
//     user = await User.findById(req.params.id);
//     try {
//       res.render("profile", {
//         id: req.params.id,
//         name: user.name,
//         email: user.email,
//         phone: user.phone,
//         pic: user.photo,
//       });
//     } catch (error) {
//       console.log(error.message);
//     }
//   }
// });
// // -----------------------end of Routing for Profile ----------------------------------

// router.post("/uploadPhoto", authController.protect, userController.upload);

// router.post(
//   "/updateProfile",
//   authController.protect,
//   // userController.updateMe,
//   async function (req, res, next) {
//     const user = await User.findByIdAndUpdate(res.locals.id, {
//       name: req.body.name,
//       phone: req.body.phone,
//       email: req.body.email,
//     });
//     console.log(user);
//     next();
//   },
//   (req, res) => {
//     console.log("success");
//     res.redirect(`/profile/${res.locals.id}`);
//   }
// );
// // router.post("/verifyOtp", authController.verifyOTP);

// router.get("/forgotPassword", (req, res) => {
//   res.render("forgot_multiform");
// });
// router.post("/forgotPassword", authController.forgotPassword, (req, res) => {
//   res.redirect("/resetPassword");
// });

// router.get("/resetPassword", (req, res) => {
//   res.render("resetPassword");
// });
// router.post("/resetPassword", authController.resetPassword, (req, res) => {
//   res.redirect("/login");
// });

router.get("/logout", authController.protect, authController.logout);
// router.get("/getUser", authController.protect, userController.getUser);
// router.get(
//   "/deleteUser/:id",
//   authController.protect,
//   userController.deleteUser,
//   (req, res) => {
//     res.redirect("/");
//   }
// );

router.post("/createPost", authController.protect, postController.addPost);

// router.get(
//   "/customer",
//   authController.protect,
//   postController.getPosts,
//   async (req, res, next) => {
//     const user = await User.findById(res.locals.id);
//     res.render("customer", {
//       id: res.locals.id,
//       len: res.locals.len,
//       post: res.locals.data,
//       pic: user.photo,
//     });
//     next();
//   }
// );

// router.get(
//   "/provider",
//   authController.protect,
//   postController.getUserPosts,
//   async (req, res) => {
//     const user = await User.findById(res.locals.id);
//     res.render("provider", {
//       id: res.locals.id,
//       num: res.locals.number,
//       post: res.locals.data,
//       pic: user.photo,
//     });
//   }
// );

module.exports = router;
