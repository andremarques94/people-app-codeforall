interface DetailModalProps {
  visible: boolean;
  onClose: () => void;
  id: number | null;
}

const DetailModal: React.FC<DetailModalProps> = ({
  visible = false,
  onClose,
  id = null,
}) => {
  return visible && <h1>Detail Modal</h1>;
};

export default DetailModal;
