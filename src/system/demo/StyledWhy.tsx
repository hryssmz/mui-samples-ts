// system/demo/StyledWhy.tsx
import { styled } from "@mui/material/styles";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

export default function StyledWhy() {
  const StatWrapper = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[1],
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(2),
    minWidth: 300,
  }));

  const StatHeader = styled("div")(({ theme }) => ({
    color: theme.palette.text.secondary,
  }));

  const StyledTrend = styled(TrendingUpIcon)(({ theme }) => ({
    color: theme.palette.success.dark,
    fontSize: 16,
    verticalAlignment: "sub",
  }));

  const StatValue = styled("div")(({ theme }) => ({
    color: theme.palette.text.primary,
    fontSize: 34,
    fontWeight: theme.typography.fontWeightMedium,
  }));

  const StatDiff = styled("div")(({ theme }) => ({
    color: theme.palette.success.dark,
    display: "inline",
    fontWeight: theme.typography.fontWeightMedium,
    marginLeft: theme.spacing(0.5),
    marginRight: theme.spacing(0.5),
  }));

  const StatPrevious = styled("div")(({ theme }) => ({
    color: theme.palette.text.secondary,
    display: "inline",
    fontSize: 12,
  }));

  return (
    <StatWrapper>
      <StatHeader>Sessions</StatHeader>
      <StatValue>98.3 K</StatValue>
      <StyledTrend />
      <StatDiff>18.77%</StatDiff>
      <StatPrevious>vs last week</StatPrevious>
    </StatWrapper>
  );
}
