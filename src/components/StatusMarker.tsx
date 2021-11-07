import '../styles/components/status-marker.scss';

interface Props {
  status: string;
}

const StatusMarker = ({ status }: Props): JSX.Element => {
  const classStatus = status.toLowerCase();
  return (
    <div
      className={`invoice-status-container invoice-status-container-${classStatus}`}
    >
      <div className='invoice-status-circle' />
      <span className='invoice-status'>{status}</span>
    </div>
  );
};

export default StatusMarker;
