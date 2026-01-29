// ========================================================
// ----------------------- main 2 -------------------------
// ========================================================
makeHorizontalCardScroll()

// ========================================================
// ----------------------- main 3 -------------------------
// ========================================================

makeDesginAnimationCircle("#wwd_odm .main3 .desginAnimationCircle");

imagesWheelIntroManagerOpacity({
  target: "#wwd_odm .main3 .imgCover",
  // markers:true
})
imagesWheelControlManagerY({
  target: "#wwd_odm .main3 .imgCover",
  fromY: 30, toY: -10,
  // markers:true
})