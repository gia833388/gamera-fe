import styled from 'styled-components';
import { useFormik } from 'formik';
import MuiTextField from '@mui/material/TextField';
import MuiButton from '@mui/material/Button';
import MuiLoadingButton from '@mui/lab/LoadingButton';
import ButtonUpload from './ButtonUpload';
import SideInfo from './SideInfo/SideInfo';
import TagPicker from './TagPicker';
import TextEditor from '../TextEditor';
import ButtonBack from './ButtonBack';

const PageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

const Main = styled.main`
  width: 800px;
`;

const Side = styled.aside`
  max-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormWrapper = styled.div`
  padding-top: 1rem;
`;

const Header = styled.header`
  padding-left: 2rem;
  padding-top: 2rem;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: #303442;
`;

const TextField = styled(MuiTextField)`
  color: #b6b6b6;
  margin-top: '20px';
  max-width: '800px';
  & .MuiInputBase-input {
    padding-left: 0;
    font-size: 30px;
  }
  & label.Mui-focused {
    color: green;
  }
  & .MuiInput-underline:after {
    border-bottom-color: green;
  }
  & .MuiOutlinedInput-root {
    & fieldset {
      border: none;
      border-color: red;
    }
    &:hover fieldset {
      border-color: yellow;
    }
    &.Mui-focused fieldset {
      border-color: green;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-top: 2rem;
`;

const Button = styled(MuiButton)`
  height: 46px;
  margin-left: 2rem;
  color: #f4f4f4;
  font-weight: 400;
  font-size: 18px;
  border-radius: 3px;
  border-color: #5c5b64;
  text-transform: none;

  &:hover {
    border-color: #5c5b64;
    opacity: 0.8;
  }
`;

const PublishButton = styled(MuiLoadingButton)`
  width: 94px;
  height: 46px;
  color: #0e0e0e;
  font-weight: 700;
  font-size: 18px;
  border-radius: 3px;
  text-transform: none;
  background-color: ${({ theme }) => theme.color.main};
  &:hover {
    background-color: ${({ theme }) => theme.color.main};
    opacity: 0.8;
  }
`;

const Post = () => {
  const formik = useFormik({
    initialValues: {
      title: '',
      contents: '',
      tagList: [],
    },
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(false);

      // TODO: handle notification
    },
  });

  return (
    <PageWrapper>
      <Main>
        <ButtonBack />
        <FormWrapper>
          <form onSubmit={formik.handleSubmit}>
            <Header>
              <ButtonUpload />
              <TextField
                fullWidth
                hiddenLabel
                name="title"
                placeholder="New post title here"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.title}
              />
              <TagPicker />
            </Header>
            <TextEditor
              value={formik.values.contents}
              // onChange={(value: string) => {
              //   formik.setFieldValue('contents', value);
              // }}
              placeholder={`Say something about ${88} ...`}
            />
            <ButtonGroup>
              <PublishButton
                type="submit"
                variant="contained"
                loading={formik.isSubmitting}
              >
                Publish
              </PublishButton>
              <Button variant="outlined">Save draft</Button>
            </ButtonGroup>
          </form>
        </FormWrapper>
      </Main>
      <Side>
        <SideInfo />
      </Side>
    </PageWrapper>
  );
};

export default Post;
