import {
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";

interface Props {
  open: boolean;
  title: string;
  children: React.ReactNode;
}

export default function Modal({
  open,
  title,
  children,
}: Props) {
  return (
    <Dialog open={open}>
      <DialogTitle>
        {title}
      </DialogTitle>

      <DialogContent>
        {children}
      </DialogContent>
    </Dialog>
  );
}