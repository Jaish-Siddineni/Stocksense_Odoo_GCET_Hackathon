import {
  Card,
  List,
  ListItem,
  Typography
} from "@mui/material";

const activities = [
  "Receipt WH/IN/001 Created",
  "Delivery WH/OUT/002 Completed",
  "Warehouse Updated",
  "Stock Adjusted"
];

export default function RecentActivity() {
  return (
    <Card
      sx={{
        p: 2,
        borderRadius: 4
      }}
    >
      <Typography
        variant="h6"
        mb={2}
      >
        Recent Activity
      </Typography>

      <List>
        {activities.map((activity) => (
          <ListItem key={activity}>
            {activity}
          </ListItem>
        ))}
      </List>
    </Card>
  );
}