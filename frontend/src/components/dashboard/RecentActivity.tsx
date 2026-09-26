import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
} from "@mui/material";

import {
  useEffect,
  useState,
} from "react";

import { api } from "../../services/api";

interface Activity {
  text: string;
  createdAt: string;
}

export default function RecentActivity() {
  const [activities, setActivities] =
    useState<Activity[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchActivities =
      async () => {
        try {
          const [
            receiptsRes,
            deliveriesRes,
          ] = await Promise.all([
            api.get("/receipts"),
            api.get("/deliveries"),
          ]);

          const receiptActivities =
            receiptsRes.data.map(
              (receipt: any) => ({
                text: `Receipt from ${receipt.supplier}`,
                createdAt:
                  receipt.receiptDate,
              })
            );

          const deliveryActivities =
            deliveriesRes.data.map(
              (delivery: any) => ({
                text: `Delivery to ${delivery.customer}`,
                createdAt:
                  delivery.deliveryDate,
              })
            );

          const merged = [
            ...receiptActivities,
            ...deliveryActivities,
          ]
            .sort(
              (a, b) =>
                new Date(
                  b.createdAt
                ).getTime() -
                new Date(
                  a.createdAt
                ).getTime()
            )
            .slice(0, 10);

          setActivities(merged);
        } catch (error) {
          console.error(
            "Failed to load activities",
            error
          );
        } finally {
          setLoading(false);
        }
      };

    fetchActivities();
  }, []);

  return (
    <Card
      sx={{
        p: 2,
        borderRadius: 4,
      }}
    >
      <Typography
        variant="h6"
        mb={2}
      >
        Recent Activity
      </Typography>

      {loading ? (
        <CircularProgress />
      ) : (
        <List>
          {activities.length === 0 ? (
            <ListItem>
              <ListItemText
                primary="No activity found"
              />
            </ListItem>
          ) : (
            activities.map(
              (
                activity,
                index
              ) => (
                <ListItem
                  key={index}
                >
                  <ListItemText
                    primary={
                      activity.text
                    }
                    secondary={new Date(
                      activity.createdAt
                    ).toLocaleString()}
                  />
                </ListItem>
              )
            )
          )}
        </List>
      )}
    </Card>
  );
}