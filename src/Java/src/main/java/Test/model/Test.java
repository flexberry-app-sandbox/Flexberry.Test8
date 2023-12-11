package Test.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Test.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Тест
 */
@Entity(name = "IISTestТест")
@Table(schema = "public", name = "Тест")
public class Test {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Цена")
    private Integer цена;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Nomenkaltura")
    @Convert("Nomenkaltura")
    @Column(name = "Номенкалтура", length = 16, unique = true, nullable = false)
    private UUID _nomenkalturaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Nomenkaltura", insertable = false, updatable = false)
    private Nomenkaltura nomenkaltura;


    public Test() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getЦена() {
      return цена;
    }

    public void setЦена(Integer цена) {
      this.цена = цена;
    }


}