import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from 'next/dynamic';

import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

const ReactApexChart  = dynamic(() => import('react-apexcharts'), {
  ssr: false,
})

const options = {
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    },
    foreColor: theme.colors.gray[500]
  },
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  markers:{
    size: 2
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2021-03-18T00:00:00.000Z',
      '2021-03-19T00:00:00.000Z',
      '2021-03-20T00:00:00.000Z',
      '2021-03-21T00:00:00.000Z',
      '2021-03-22T00:00:00.000Z',
      '2021-03-23T00:00:00.000Z',
      '2021-03-24T00:00:00.000Z'
    ]
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3
    }
  }
};

const series = [
  { name: 'series1', data: [31,120,18,26,62,18,150]}
];

const options2 = {
    labels: ['A','B','C','D','E','F','G'],
    legend: {
      show: false
    },
}
const series2 = [31,120,18,26,62,18,150];

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignItems="flex-start">
          <Box p={["6","8"]} bg="gray.800" borderRadius={8} pb="4" >
            <Text fontSize="lg" mb="4">Inscritos da Semana</Text>
            <ReactApexChart options={options} series={series} type="area" height={175} />
          </Box>
          <Box p={["6","8"]} bg="gray.800" borderRadius={8} pb="4" >
            <Text fontSize="lg" mb="4">Taxa de abertura</Text>
            <ReactApexChart options={options2} series={series2} type="donut" height={210} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}