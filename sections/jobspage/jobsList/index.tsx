import AvailableJobs from './internals/Jobs';
import JobsTitle from './internals/JobsTitle';

const JobsListPage = () => {
  return (
    <section className="my-24">
      <JobsTitle />
      <AvailableJobs />
    </section>
  );
};

export default JobsListPage;
