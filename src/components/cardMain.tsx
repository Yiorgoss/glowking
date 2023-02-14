import Card from '@components/common/card/card'

const CardMain = () => {

    return (
        <Card className="mx-auto w-[300px] overflow-hidden rounded-xl bg-primary shadow-layered transition-transform duration-300 hover:-translate-y-x hover:translate-x-0.5 hover:shadow-layered-xl">
            <Card.Graphic className="h-[200px] w-full" src="https://via.placeholder.com/1000x1000.png" />

            <Card.Header className="text-center mt-8 text-2xl font-bold">Header</Card.Header>
            <Card.Content className="break-all p-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae
                erat luctus, venenatis tortor sit amet, aliquam ipsum. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac

            </Card.Content>
        </Card>
    )
}

export default CardMain
