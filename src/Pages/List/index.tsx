import React, {useMemo, useState, useEffect} from 'react';

import ContentHeader from '../../Components/ContentHeader';
import SelectInput from '../../Components/SelectInput';
import HistoryFinanceCard from '../../Components/HistoryFinanceCard';

import gains from '../../Repositories/gains';
import expenses from '../../Repositories/expenses';
import formatCurrency from '../../Utils/formatCurrency';
import formatDate from '../../Utils/formatDate';
import monthsList from '../../Utils/months';

import { Container, Content, Filters } from './styles';
import { uuid } from 'uuidv4';

interface IRouteParams {
    match: {
        params: {
            type: string;
        }
    }
};

interface IData {
    id: string;
    description: string;
    amountFormatted: string;
    frequency: string;
    dateFormatted: string;
    tagColor: string;
};

const List: React.FC<IRouteParams> = ({ match }) => {
    
    const [data, setData] = useState<IData[]>([]);

    const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth() + 1));
    const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear()));
    const [cardType, setCardType] = useState(String('todos'));
    
    const { type } = match.params;

    const title = useMemo(() => {
        return type === 'entry-balance' ? {
            text: 'Entradas',
            lineColor: '#F7931B'
        } : {
            text: 'Saídas',
            lineColor: '#E44C4E'
        };
    }, [type]);

    const listData = useMemo(() => {
        return type === 'entry-balance' ? gains : expenses;
    }, [type]);

    const years = useMemo(() => {
        let uniqueYears: number[] = [];
        listData.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();

            if (!uniqueYears.includes(year)) {
                uniqueYears.push(year)
            }
        })

        return uniqueYears.map(year => {
            return {
                label: year,
                value: year
            }
        })
    }, [listData]);

    const months = useMemo(() => {
        return monthsList.map((month, index) => {
            return {
                value: index + 1,
                label: month
            }
        })
    }, [listData]);

    useEffect(() => {
        const filteredData = listData.filter(
            item => {
                const date = new Date(item.date);
                const month = String(date.getMonth() + 1);
                const year = String(date.getFullYear());

                if (cardType === 'todos') {
                    return month === monthSelected
                        && year === yearSelected;
                }
                else {
                    return month === monthSelected
                        && year === yearSelected
                        && item.frequency === cardType
                }
            }
        );

        const formattedData = filteredData.map(
            item => {
                return {
                    id: uuid(),
                    description: item.description,
                    amountFormatted: formatCurrency(Number(item.amount)),
                    frequency: item.frequency,
                    dateFormatted: formatDate(item.date),
                    tagColor: item.frequency === 'recorrente' ? '#E44C4E' : '#4E41F0'
                }
            }
        )

        setData(formattedData);
    }, [listData, monthSelected, yearSelected, cardType, data.length])

    return (
        <Container>
            <ContentHeader title={title.text} lineColor={title.lineColor}>
                <SelectInput
                    defaultValue={monthSelected}
                    options={months} 
                    onChange={(e) => setMonthSelected(e.target.value)}
                />
                <SelectInput 
                    defaultValue={yearSelected}
                    options={years} 
                    onChange={(e) => setYearSelected(e.target.value)}
                />
            </ContentHeader>
            <Filters>
                <button
                    type="button"
                    className="tag-filter tag-filter-recurrent tag-actived"
                    onClick={() => setCardType(cardType === 'recorrente' ? 'todos' : 'recorrente')}
                >
                    Recorrentes
                </button>
                <button
                    type="button"
                    className="tag-filter tag-filter-eventual tag-actived"
                    onClick={() => setCardType(cardType === 'eventual' ? 'todos' : 'eventual')}
                >
                    Eventuais
                </button>
            </Filters>
            <Content>
                {
                    data.map(item => (
                        <HistoryFinanceCard
                            key={item.id}
                            tagColor={item.tagColor}
                            title={item.description}
                            subtitle={item.dateFormatted}
                            amount={item.amountFormatted}
                        />
                    ))
                }
            </Content>
        </Container>
    );
}

export default List;