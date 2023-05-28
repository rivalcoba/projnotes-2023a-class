// Actions methods
// GET "/project"
const showDashboard = (req, res) => {
  res.send('⚠️ UNDER CONSTRUCTION: GET /project ⚠️');
};

// GET "/project/add"
const add = (req, res) => {
  res.render('project/addView');
};

// Controlador user
export default {
  // Action Methods
  showDashboard,
  add,
};
