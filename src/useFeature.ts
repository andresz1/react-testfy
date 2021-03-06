import useTesfy from './useTesfy';

interface Props {
  id: string;
  userId?: string;
  attributes?: Record<string, any>;
}

const useFeature = ({ id, userId, attributes }: Props) => {
  const { engine } = useTesfy();

  return engine?.isFeatureEnabled(id, userId, attributes);
};

export default useFeature;
