import FlagCircleIcon from '@mui/icons-material/FlagCircle';
import HistoryIcon from '@mui/icons-material/History';
import PublicIcon from '@mui/icons-material/Public';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import { FC } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { CityModel } from '../../models';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material';

import 'leaflet/dist/leaflet.css';

export const CityCard: FC<{ city?: CityModel; loading?: boolean }> = ({
  city,
  loading = false,
}) => {
  const renderMap = () => {
    return (
      <MapContainer
        center={{
          lat: city?.getLatitude() as number,
          lng: city?.getLongitude() as number,
        }}
        zoom={13}
        scrollWheelZoom={false}
        zoomControl={false}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url="https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
          maxZoom={20}
          subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
        />
        <Marker
          position={[
            city?.getLatitude() as number,
            city?.getLongitude() as number,
          ]}
        >
          <Popup>{city?.getName()}</Popup>
        </Marker>
      </MapContainer>
    );
  };

  const renderName = () => {
    return (
      <Box
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Typography gutterBottom variant="h5" component="h1" color={'primary'}>
          {city?.getName()}
        </Typography>
        <Typography
          gutterBottom
          variant="caption"
          component="h2"
          color={'primary'}
        >
          {city?.getNameNative()}
        </Typography>
      </Box>
    );
  };

  const renderContinent = () => {
    return (
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
        gap={1}
      >
        <Typography gutterBottom variant="body1" color={'text.secondary'}>
          {'Continent:'}
        </Typography>
        <Typography gutterBottom variant="body2" color={'primary'}>
          {city?.getContinent()}
          <PublicIcon />
        </Typography>
      </Box>
    );
  };

  const renderCountry = () => {
    return (
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
        gap={1}
      >
        <Typography gutterBottom variant="body1" color={'text.secondary'}>
          {'Country:'}
        </Typography>
        <Typography gutterBottom variant="body2" color={'primary'}>
          {city?.getCountry()}
          <FlagCircleIcon />
        </Typography>
      </Box>
    );
  };

  const renderPopulation = () => {
    return (
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
        gap={1}
      >
        <Typography gutterBottom variant="body1" color={'text.secondary'}>
          {'Population:'}
        </Typography>
        <Typography gutterBottom variant="body2" color={'primary'}>
          {city?.getPopulation()}
          <WorkspacesIcon />
        </Typography>
      </Box>
    );
  };

  const renderFounded = () => {
    return (
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
        gap={1}
      >
        <Typography gutterBottom variant="body1" color={'text.secondary'}>
          {'Founded:'}
        </Typography>
        <Typography gutterBottom variant="body2" color={'primary'}>
          {city?.getFounded()}
          <HistoryIcon />
        </Typography>
      </Box>
    );
  };

  const renderlandmarks = () => {
    return (
      <Stack direction="column" spacing={1} mt={2}>
        {city?.getLandmarkModels().map((landmark) => (
          <Chip
            key={landmark.getName()}
            label={landmark.getName()}
            color="primary"
          />
        ))}
      </Stack>
    );
  };

  if (loading || !city) {
    return (
      <Card data-testid="loading-skeleton" sx={{ minWidth: 345 }}>
        <CardMedia component="div" style={{ height: 140 }}>
          <Skeleton variant="rectangular" height={140} />
        </CardMedia>
        <CardActionArea>
          <CardContent
            component={Box}
            gap={1}
            display={'flex'}
            flexDirection={'column'}
          >
            <Skeleton variant="rounded" height={30} />
            <Skeleton variant="rounded" height={20} />
            <Skeleton variant="rounded" height={20} />
            <Skeleton variant="rounded" height={20} />
            <Skeleton variant="rounded" height={20} />
            <Skeleton variant="rounded" height={25} />
            <Skeleton variant="rounded" height={25} />
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }

  return (
    <Card data-testid="city-card" sx={{ minWidth: 345 }}>
      <CardMedia component="div" style={{ height: 140 }}>
        {renderMap()}
      </CardMedia>
      <CardActionArea>
        <CardContent>
          {renderName()}
          {renderContinent()}
          {renderCountry()}
          {renderPopulation()}
          {renderFounded()}
          {renderlandmarks()}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
