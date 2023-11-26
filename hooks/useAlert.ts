import { enqueueSnackbar, VariantType } from 'notistack';

const useAlert = (message: string, variant: VariantType) => {
  enqueueSnackbar(`${message}`, {
    variant: `${variant}`,
  });
};
export default useAlert;
