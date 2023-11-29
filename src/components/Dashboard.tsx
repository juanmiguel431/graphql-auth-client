import requireAuth from './requireAuth.tsx';

const _Dashboard = () => {
  return (
    <div>Dashboard</div>
  );
};

const Dashboard = requireAuth(_Dashboard);

export default Dashboard;
